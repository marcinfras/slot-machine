export class Statistics {
  constructor() {
    this.stats = {
      wins: 0,
      losses: 0,
    };
    this.wins = document.querySelector(".game__wins");
    this.losses = document.querySelector(".game__losses");
  }

  renderStats() {
    this.wins.textContent = this.stats.wins;
    this.losses.textContent = this.stats.losses;
  }
}
