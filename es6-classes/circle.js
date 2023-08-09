/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, Radius: ${this.radius}`;
  }
}

const circle = new Circle(4);
console.log('describe(circle):', circle.describe());
