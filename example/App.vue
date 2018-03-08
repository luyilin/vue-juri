<template>
  <div id="app">
    <h2 class="title">
      <span>Examples</span>
      <svg @click="expand = !expand"
           t="1519462199298" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2155" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path d="M411.485726 111.200056H138.199901a43.350032 43.350032 0 0 0-43.350032 43.350032v273.2786a43.350032 43.350032 0 0 0 43.350032 43.350032h273.285825a43.350032 43.350032 0 0 0 43.350032-43.350032V154.550088a43.350032 43.350032 0 0 0-43.350032-43.350032zM879.384294 111.200056H606.105694a43.350032 43.350032 0 0 0-43.350032 43.350032v273.2786a43.350032 43.350032 0 0 0 43.350032 43.350032h273.2786a43.350032 43.350032 0 0 0 43.350032-43.350032V154.550088a43.350032 43.350032 0 0 0-43.350032-43.350032zM411.485726 554.844281H138.199901a43.350032 43.350032 0 0 0-43.350032 43.350032v273.285825a43.350032 43.350032 0 0 0 43.350032 43.350032h273.285825a43.350032 43.350032 0 0 0 43.350032-43.350032V598.194313a43.350032 43.350032 0 0 0-43.350032-43.350032zM879.384294 554.844281H606.105694a43.350032 43.350032 0 0 0-43.350032 43.350032v273.285825a43.350032 43.350032 0 0 0 43.350032 43.350032h273.2786a43.350032 43.350032 0 0 0 43.350032-43.350032V598.194313a43.350032 43.350032 0 0 0-43.350032-43.350032z" fill="#515151" p-id="2156"></path></svg>
    </h2>
    <juri :doc-list="['basic.md', 'half.md']" :expand-all="expand">
      <star-rate
        slot="demo-0"
        :value="3"/>
      <star-rate
        slot="demo-1"
        :value="2.5"
        :star-half="true"
        :on-change="onChangeFn"
        type="star1"/>
    </juri>
  </div>
</template>

<script>
import Juri from '../src'
import StarRate from 'vue-cute-rate'

export default {
  data () {
    return {
      expand: false
    }
  },

  components: {
    Juri,
    StarRate
  },

  methods: {
    onChangeFn (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss">
  .title {
    margin-bottom: 65px;
    svg {
      color: #555;
      width: 15px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
</style>
