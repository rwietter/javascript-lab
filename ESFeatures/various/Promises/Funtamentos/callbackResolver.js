const bands = [
  {
    name: "Alan Walker"
  },
  {
    name: "Hardwell"
  }
];

const bandList = document.getElementById("bandList");

const getBands = () => {
  setTimeout(() => {
    let output = "";
    bands.forEach((item, idx) => {
      output += `<li>${item.name}</li>`;
    });
    bandList.innerHTML = output;
  }, 1000);
};

const addBand = (name, callback) => {
  const callback = (resolve, reject) => {
    setTimeout(() => {
      bands.push({ name });
      resolve(); // - promise resolvida
    }, 2000);
  };
  return new Promise(callback);
};
addBand("Vintage".then(getBands));
