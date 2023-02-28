export class Draw {
  constructor() {
    this.colors = ["red", "green", "blue"];
    this.slots = document.querySelectorAll(".game__color");
  }

  drawColors() {
    const colors = [];
    for (let i = 0; i < this.colors.length; i++) {
      const index = Math.floor(Math.random() * this.colors.length);
      colors.push(this.colors[index]);
    }
    this.slots.forEach((slot, index) => {
      slot.className = `game__color game__color--${colors[index]}`;
    });
    return colors;
  }
}
