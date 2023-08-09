/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, 4 * width);
    this.width = width;
  }

  describe() {
    return `${super.describe()}, Width: ${this.width}`;
  }
}

const square = new Square(5);
console.log('value of square:', square.describe());
