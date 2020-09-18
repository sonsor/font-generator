const path = require("path");
const rootPath = path.resolve(process.cwd());
const svgtoiconfont = require("svg-to-iconfont");
 
svgtoiconfont({
  dist: path.resolve(rootPath, "dist"),
  src: path.resolve(path.join(rootPath, "src", "svg")),
  fontName: "vpay",
  classNamePrefix: "vp-icon", // class name prefix （class前缀）
}).then(() => {
  console.log('done!');
});