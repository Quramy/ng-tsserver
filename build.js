const fs = require("fs");
const beforeJs = fs.readFileSync("before.js", "utf8")
const template = fs.readFileSync("ng-tsserver.sh.template", "utf8");
const script = template.replace(/%%BEFORE_JS%%/, beforeJs);
console.log(script);
fs.writeFileSync("ng-tsserver", script);
