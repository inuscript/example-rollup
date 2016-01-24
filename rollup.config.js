import multi from "rollup-plugin-multi-entry"
export default {
  // entry: "src/*.js",
  entry: "src/index.js",
  format: "umd",
  // format: "cjs",
  dest: "dest/index.js",
  moduleName: "myFoo",
  // plugins: [multi()]
}