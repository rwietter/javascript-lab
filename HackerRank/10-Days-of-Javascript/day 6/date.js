let date = (dateString) =>
  new Date(dateString).toLocaleString("br", { weekday: "long" });

console.log(date("10/11/2009"));
