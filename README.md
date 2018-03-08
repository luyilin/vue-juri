# vue-juri

[![NPM version](https://img.shields.io/npm/v/vue-juri.svg?style=flat)](https://npmjs.com/package/vue-juri) [![NPM downloads](https://img.shields.io/npm/dm/vue-juri.svg?style=flat)](https://npmjs.com/package/vue-juri) [![CircleCI](https://circleci.com/gh/luyilin/vue-juri/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/vue-juri/tree/master)

## Introduction

vue-juri is a component for Vue.js that fetches Markdown files and uses slots to display the demo and usage elegantly.

The design is inspired by [Ant Design](https://ant.design/components/rate/)! I like the elegant design to display a list of examples.

The name comes from Juri Yukawa in *Kokkoku* 💃

## Install

```bash
yarn add vue-juri
```

CDN: [UNPKG](https://unpkg.com/vue-juri/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-juri/) (available as `window.Juri`)

## Usage

```vue
<template>
  <juri></juri>
</template>

<script>
import Juri from 'vue-juri'

export default {
  components: {
    Juri
  }
}
</script>
```

## Options

| Property | Description | type | Default |
| -------- | ----------- | ---- | ------- |
| root | The path of the markdown file. | string | /docs/ |
| doc-list | Array of the example markdown files. | array | ['demo.md'] |
| expand-all | Expand all usages. | boolean | false |
| highlight | Whether to highlight code blocks, you can supply a function to customize this, use prismjs to highlight code by default. | boolean / function | true |

## Slot

The live demo which you want to display, make sure to use `demo-${index}` as the slot name, `index` is the order of the markdown file in `doc-list`.

Here is a simple example:

```vue
<template>
  <div id="app">
    <kokk :doc-list="['demo.md']">
      <star-rate slot="demo-0" :value="4"/>
    </kokk>
  </div>
</template>

<script>
import Kokk from 'kokk'
import StarRate from 'vue-cute-rate'

export default {
  components: {
    Kokk,
    StarRate
  }
}
</script>
```

## Author

vue-juri &copy; [luyilin](https://github.com/luyilin), released under the MIT License.

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
