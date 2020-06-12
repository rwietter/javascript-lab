import React from "react";

const arr = [1, 2, 3, 4, 5];
const doubled = arr.map((number) => number * 2);
console.log(doubled);
console.log(arr);

class List extends React.Component {
  render() {
    return (
      <div style={{ fontSize: 20, left: 50, display: "flex" }}>
        <ul>
          <li>Elements: {arr}</li>
          <li>Map elements: {doubled}</li>
        </ul>
      </div>
    );
  }
}
export default List;
