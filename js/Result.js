export class Result {
  constructor() {
    this.result = document.querySelector(".game__result");
  }
  checkResult(colors, bid) {
    if (
      (colors[0] === colors[1] && colors[0] === colors[2]) ||
      (colors[0] !== colors[1] &&
        colors[0] !== colors[2] &&
        colors[1] !== colors[2])
    ) {
      this.result.textContent = `You win ${bid * 3}$`;
      return "win";
    } else {
      this.result.textContent = `You loss ${bid}$`;
      return "loss";
    }
  }
}
