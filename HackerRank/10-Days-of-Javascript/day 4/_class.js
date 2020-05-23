class Polygon {
  constructor(arr) {
    this.arr = arr;
  }
  perimeter() {
    let perimeterSum = this.arr.reduce((acc, per) => (acc += per));
    return perimeterSum;
  }
}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());
