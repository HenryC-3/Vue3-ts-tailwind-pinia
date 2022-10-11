import { defaultTheme, type DefaultThemeOptions } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

const config: DefaultThemeOptions = {
  lang: 'en-US',
  title: '组件文档',
  description: '介绍当前项目下的若干组件',
  base: '/blossom/',
  theme: defaultTheme({
    darkMode: false,
    navbar: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: 'Github',
        link: 'https://github.com/HenryC-3'
      }
    ],
    sidebar: [
      {
        text: 'Tailwind',
        link: '/components/tailwind.html'
      }
    ]
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../../src/components')
    })
  ],
  bundler: viteBundler({
    viteOptions: {
      // setup tailwind https://github.com/vuepress/vuepress-next/discussions/116#discussioncomment-858910
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')]
        }
      }
    }
  })
}

export default config
