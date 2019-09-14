const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-js": hot(preferDefault(require("/Users/Weian/GitHub/hunggwo/hunggwo.github.io/src/templates/product.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Weian/GitHub/hunggwo/hunggwo.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/Weian/GitHub/hunggwo/hunggwo.github.io/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Weian/GitHub/hunggwo/hunggwo.github.io/src/pages/index.js")))
}

