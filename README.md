# vue-juri

[![NPM version](https://img.shields.io/npm/v/vue-juri.svg?style=flat)](https://npmjs.com/package/vue-juri) [![NPM downloads](https://img.shields.io/npm/dm/vue-juri.svg?style=flat)](https://npmjs.com/package/vue-juri) [![CircleCI](https://circleci.com/gh/luyilin/vue-juri/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/vue-juri/tree/master)

## Introduction

Vue-juri is a component for Vue.js that fetches Markdown files and uses slots to display the demos and usages elegantly.

The design is inspired by [Ant Design](https://ant.design/components/rate/)! I like the elegant way to display a list of examples.

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

## Guides

### What are example docs

Example docs are a list of markdown files that contain the code blocks of the examples' usage. We render the code blocks in the usage part of the demo. For example:

```
<template>
  <star-rate :value="4"/>
</template>

<script>
import StarRate from 'vue-cute-rate'

export default {
  components: {
    StarRate
  }
}
</script>
```

### Set the examples' custom title and description

You can use following html comment marks in each example markdown file to set custom title and description of it.

```
<!-- title-start -->

title: Half star

<!-- title-stop -->

<!-- desc-start -->

desc: Support select half star.

<!-- desc-stop -->
```

### Where to set the ```docs``` directory

The ```docs``` directory was set at the same directory where `.vue` file is located by default.


## Options

| Property | Description | type | Default |
| -------- | ----------- | ---- | ------- |
| doc-list | Array of the example markdown files. | array | ['demo.md'] |
| expand-all | Expand all usages. | boolean | false |
| highlight | Whether to highlight code blocks, you can supply a function to customize this, use prismjs to highlight code by default. | boolean / function | true |

## Slot

The live demo which you want to display, make sure to use `demo-${index}` as the slot name, `index` is the order of the markdown file in `doc-list`.

Here is a simple example:

```vue
<template>
  <div id="app">
    <juri :doc-list="['demo.md']">
      <star-rate slot="demo-0" :value="4"/>
    </juri>
  </div>
</template>

<script>
import Juri from 'vue-juri'
import StarRate from 'vue-cute-rate'

export default {
  components: {
    Juri,
    StarRate
  }
}
</script>
```

## Author

vue-juri &copy; [luyilin](https://github.com/luyilin), released under the MIT License.

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
