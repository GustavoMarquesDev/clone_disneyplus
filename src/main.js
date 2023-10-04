document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelector(".shows__tabs");

  navButtons.addEventListener("click", function (e) {
    const button = e.target;

    if (!button.classList.contains("shows__tabs__button")) return;

    button.addEventListener("click", function () {
      const abaAlvo = button.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add("shows__list--is-active");
      removeBotaoAtivo();
      e.target.classList.add("shows__tabs__button--is-active");
    });
  });

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
