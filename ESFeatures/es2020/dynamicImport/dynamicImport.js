<img src={import("./module")}></img>;

/* .................... */
const dynamicImport = async () => {
  if (true) {
    let { hello } = await require("./module");
    console.log(await hello(2)); // 4
  }
};
dynamicImport();
