import { Draw } from "./Draw.js";
import { Result } from "./Result.js";
import { Statistics } from "./Statistics.js";
import { Wallet } from "./Wallet.js";

class Game {
  constructor(money) {
    this.wallet = new Wallet(money);
    this.stats = new Statistics();
    this.draw = new Draw();
    this.result = new Result();
    this.input = document.querySelector(".game__bid");
    this.rollBtn = document.querySelector(".game__roll");
    this.rollBtn.addEventListener("click", () => {
      this.startGame();
    });
    this.render();
  }

  render() {
    this.input.value = "";
    this.wallet.renderWallet();
    this.stats.renderStats();
  }

  startGame() {
    const bid = Math.floor(this.input.value);
    if (bid <= 0 || bid === "") return alert("Wrong value");
    if (!this.wallet.checkCanPlay(bid))
      return alert("You don't have enough money");
    this.wallet.money -= bid;
    const colors = this.draw.drawColors();
    const result = this.result.checkResult(colors, bid);
    if (result === "win") {
      this.wallet.money += bid * 3;
      this.stats.stats.wins++;
    } else {
      this.stats.stats.losses++;
    }
    this.render();
  }
}

new Game(200);
