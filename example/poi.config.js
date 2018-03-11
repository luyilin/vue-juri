const Prism = require('prismjs')
const marked = require('marked3')

module.exports = {
  entry: "example/index.js",
  dist: "example/dist",
  homepage: "./",
  extendWebpack(config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('post')
      .loader('post-loader')
      .options({
        render(html) {
          return marked(html, {
            renderer: new marked.Renderer(),
            highlight: function(str, lang) {
              return Prism.highlight(str, Prism.languages[lang] || Prism.languages.markup)
            }
          })
        }
      })
  }
}
