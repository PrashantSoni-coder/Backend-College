const fs = require("fs");

const  fileHandler = fs.openSync("secfb","a+");
console.log(fileHandler);

fs.writeFileSync("secfb","Secret",{mode:0o200});
//fs.unlinkSync("secfb");
console.log(fs.readFileSync("secfb","utf8"));