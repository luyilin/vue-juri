<template>
  <div id="app">
    <a href="https://github.com/luyilin/vue-juri" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#88bdbc; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"/><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"/><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"/></svg></a>
    <h2 class="title">
      <span>Examples</span>
      <svg
        t="1519462199298"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2155"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="expand = !expand"><defs/><path
          d="M411.485726 111.200056H138.199901a43.350032 43.350032 0 0 0-43.350032 43.350032v273.2786a43.350032 43.350032 0 0 0 43.350032 43.350032h273.285825a43.350032 43.350032 0 0 0 43.350032-43.350032V154.550088a43.350032 43.350032 0 0 0-43.350032-43.350032zM879.384294 111.200056H606.105694a43.350032 43.350032 0 0 0-43.350032 43.350032v273.2786a43.350032 43.350032 0 0 0 43.350032 43.350032h273.2786a43.350032 43.350032 0 0 0 43.350032-43.350032V154.550088a43.350032 43.350032 0 0 0-43.350032-43.350032zM411.485726 554.844281H138.199901a43.350032 43.350032 0 0 0-43.350032 43.350032v273.285825a43.350032 43.350032 0 0 0 43.350032 43.350032h273.285825a43.350032 43.350032 0 0 0 43.350032-43.350032V598.194313a43.350032 43.350032 0 0 0-43.350032-43.350032zM879.384294 554.844281H606.105694a43.350032 43.350032 0 0 0-43.350032 43.350032v273.285825a43.350032 43.350032 0 0 0 43.350032 43.350032h273.2786a43.350032 43.350032 0 0 0 43.350032-43.350032V598.194313a43.350032 43.350032 0 0 0-43.350032-43.350032z"
          fill="#515151"
          p-id="2156"/>
      </svg>
    </h2>
    <juri
      :doc-list="docList"
      :expand-all="expand">
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
import basic from 'raw-loader!./docs/basic.md'
import half from 'raw-loader!./docs/half.md'

export default {
  components: {
    Juri,
    StarRate
  },

  data () {
    return {
      expand: false,
      docList: [basic, half]
    }
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
  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>
