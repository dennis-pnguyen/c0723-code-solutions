/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    const perimeter = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    super(area, perimeter);
    this.radius = radius;
  }

  describe() {
    return `Shape: ${Circle}, Radius: ${this.radius}`;
  }
}

const circle = new Circle(4);
console.log('describe(circle):', circle);
