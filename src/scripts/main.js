document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelector(".shows__tabs");
  const questions = document.querySelectorAll("[data-faq-question]");
  const faq = document.querySelector(".faq__questions");
  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight;

  // Para visualizar o logo e o link depois da rolagem

  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaElementosDoHeader();
    } else {
      exibeElementosDoHeader();
    }
  });

  // Seção de atrações, programação das abas
  navButtons.addEventListener("click", function (e) {
    const button = e.target;

    if (!button.classList.contains("shows__tabs__button")) return;

    const abaAlvo = button.dataset.tabButton;
    const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

    escondeTodasAbas();
    aba.classList.add("shows__list--is-active");
    removeBotaoAtivo();
    e.target.classList.add("shows__tabs__button--is-active");
  });

  // Seção FAQ, accordion
  faq.addEventListener("click", function (e) {
    const item = e.target.closest(".faq__questions__item");

    if (!item.classList.contains("faq__questions__item")) return;

    abreOuFechaResposta(item);
  });

  // for (let i = 0; i < questions.length; i++) {
  // questions[i].addEventListener("click", abreOuFechaResposta);
  //}

  //   const buttons = document.querySelectorAll("[ data-tab-button]");

  //   for (let i = 0; i < buttons.length; i++) {
  //     buttons[i].addEventListener("click", function (botao) {
  //       const abaAlvo = botao.target.dataset.tabButton;
  //       const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
  //       escondeTodasAbas();
  //       aba.classList.add("shows__list--is-active");
  //     });
  //   }
});
function exibeElementosDoHeader() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

function ocultaElementosDoHeader() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

function abreOuFechaResposta(target) {
  target.classList.toggle("faq__questions__item--is-open");
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[ data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
