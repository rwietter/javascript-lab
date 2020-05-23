class Group {
  constructor(params) {
    this.group = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }
  delete(value) {
    if (this.has(value)) {
      this.group.filter((val) => val !== value);
    }
  }
  static from(vector) {
    let group = new Group();
    for (const vc of vector) {
      group.add(vc);
    }
    return group;
  }
  has(value) {
    return this.group.includes(value);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false
