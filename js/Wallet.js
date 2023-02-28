export class Wallet {
  constructor(money) {
    this.money = money;
    this.wallet = document.querySelector(".game__money");
  }
  renderWallet() {
    this.wallet.textContent = `${this.money}$`;
  }

  checkCanPlay(bid) {
    if (bid > this.money) return false;
    return true;
  }
}
