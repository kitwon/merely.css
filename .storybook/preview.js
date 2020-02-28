import Vue from 'vue'
import { name, version } from '../package.json'
import { configure, addParameters } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// Merely.css
import "../src/index.scss";

addParameters({
  options: {
    brandTitle: `${name}@${version}`,
    showAddonsPanel: false
  },
  viewport: {
    viewports: {
      sm: {
        name: 'Small ($width-sm)',
        styles: {width: '544px', height: 'auto'}
      },
      md: {
        name: 'Medium ($width-md)',
        styles: {width: '768px', height: 'auto'}
      },
      lg: {
        name: 'Large ($width-lg)',
        styles: {width: '1012px', height: 'auto'}
      },
      xl: {
        name: 'XL ($width-xl)',
        styles: {width: '1280px', height: 'auto'}
      },
      ...INITIAL_VIEWPORTS
    }
  }
})

configure(() => {
  const loadMarkdown = require.context('../docs/content', true, /\.md$/)
  for (const path of loadMarkdown.keys()) {
    loadMarkdown(path)
  }
}, module)