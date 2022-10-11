## Features

- ⚡️ Fast: Vue3 & Vite
- ⛑️ Safe: TypeScript
- 💧 Consistency: Commitlint & Lint staged
- 📚 Document Ready: Document via Vuepress@next, see [preview](https://henryc-3.github.io/blossom/)

for more detail, checkout [Pre-packed](#pre-packed)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) with [takeover mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) enabled
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/itemdetails?itemName=bradlc.vscode-tailwindcss)

## Project Setup

```sh
npm i
npm run prepare
npm run dev
npm run docs:dev
```

## Pre-packed

### core

- vue3
- [vite](https://github.com/vitejs/vite)
- Typescript
- [vue-router](https://github.com/vuejs/router)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [pinia](https://github.com/vuejs/pinia)

### Icons

- [iconify](https://github.com/iconify/iconify)

### Coding & commit style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- Run linters against staged git files via [lint-staged](https://github.com/okonet/lint-staged)
- Lint commit message with [commitlint](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

### Document

- [vuepress-next](https://github.com/vuepress/vuepress-next), deploy on github pages.
