const { join, basename, dirname } = require('path')
const fromAst = require('code-blocks/lib/fromAST')
const fromString = require('./demo-blocks/fromString')

function storyFromMarkdown(markdown, file) {
  const ast = fromString(markdown)
  const stories = fromAst(ast)
  return stories
}

module.exports = function storyLoader(markdown) {
  // resourcePath is the full path to the file has being parsed
  // rootContext is just the dirname(rsourcePath)
  const { resourcePath = '', rootContext } = this

  const { sourcePath = rootContext } = this.query || {}
  const file = resourcePath.replace(`${sourcePath}/`, '')
  const path = join(dirname(file), basename(file, '.md'))
  const stories = storyFromMarkdown(markdown, file)
  if (stories.length) {
    console.warn(`\n ${stories.length} stories found in ${file}`)
    return `
      const { storiesOf } = require('@storybook/vue')
      const chapter = storiesOf(${JSON.stringify(path)}, module)
      const stories = ${JSON.stringify(stories)}
      for (const { title, value } of stories) {
        chapter.add(title, () => ({
          template: value
        }))
      }
    `
  } else {
    return `module.exports = { markdown: ${JSON.stringify(markdown)} }`
  }
}
