import { MDXProvider, useMDXComponents } from '@mdx-js/react'

const components = {
  code: ({ codeString, language, ...props }) => {
    console.log(codeString)
    return props.children
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      { element }
    </MDXProvider>
  )
}