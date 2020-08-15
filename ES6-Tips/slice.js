function slice(arr, start, end) {
  var len = arr.length;
  var range = [];

  start = idx(len, start);
  end = idx(len, end, len);

  while (start < end) {
    range = [...range, arr[start++]]
  }
  return range;
};

function idx(len, pos, end) {
  if (pos == null) {
    pos = end || 0;
  } else if (pos < 0) {
    pos = Math.max(len + pos, 0);
  } else {
    pos = Math.min(pos, len);
  }
  return pos;
}


function arrayToSlice() {
  const array = ['Mars', "Earth", "Jupiter", " Saturn"];
  console.log(slice(array, 1, 4));
  console.log(array)
}
