/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    const area = width * width;
    const perimeter = 4 * width;
    super(area, perimeter);
    this.width = width;
  }

  describe() {
    return `Shape: ${Square}, Width: ${area}`;
  }
}

const square = new Square(5);
console.log('value of square:', square);
