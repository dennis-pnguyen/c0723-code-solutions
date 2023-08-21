/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `Area: ${this.area}, Perimeter: ${this.perimeter}`;
  }
}

const shape = new Shape(5, 10);
console.log('value of shape.describe():', shape.describe());
