export default class View {
  $ = {};

  constructor() {
    this.$.menu = document.querySelector('[data-id="menu"');
    this.$.menuItems = document.querySelector('[data-id="menu-items"');
    this.$.resetBtn = document.querySelector('[data-id="reset-btn"');
    this.$.newRoundBtn = document.querySelector('[data-id="new-round-btn"');
    this.$.squares = document.querySelectorAll('[data-id="square"]');
    this.$.modal = document.querySelector('[data-id="modal"]');
    this.$.modalText = document.querySelector('[data-id="modal-text"]');
    this.$.modalBtn = document.querySelector('[data-id="modal-btn"]');
    this.$.turn = document.querySelector('[data-id="turn"]');
  }

  bindGameResetEvent(handler) {
    this.$.resetBtn.addEventListener("click", handler);
  }

  bindNewRoundEvent(handler) {
    this.$.newRoundBtn.addEventListener("click", handler);
  }

  bindPlayerMoveEvent(handler) {
    this.$.squares.forEach((square) => {
      square.addEventListener("click", handler);
    });
  }
}