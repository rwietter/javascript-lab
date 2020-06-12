class Group {
  constructor(params) {
    this.members = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }
  delete(value) {
    if (this.has(value)) {
      this.members.filter((val) => val !== value);
    }
  }
  static from(vector) {
    let members = new Group();
    for (const vc of vector) {
      members.add(vc);
    }
    return members;
  }
  has(value) {
    return this.members.includes(value);
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }
  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

// tornar a class anterior iterável
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
