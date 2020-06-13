function getZeroDate(date) {
  return date >= 9 ? date : `0${date}`;
}

function formatDate() {
  const date = new Date();
  let day = getZeroDate(date.getDate());
  let month = getZeroDate(date.getMonth() + 1);
  let year = getZeroDate(date.getFullYear());
  console.log(`${day}/${month}/${year}`);
}
formatDate();
