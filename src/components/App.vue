<template>
  <div>
    <h2 class="title">
      <span>{{ title }}</span>
      <svg @click="expand = !expand"
           t="1519462199298" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2155" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path d="M411.485726 111.200056H138.199901a43.350032 43.350032 0 0 0-43.350032 43.350032v273.2786a43.350032 43.350032 0 0 0 43.350032 43.350032h273.285825a43.350032 43.350032 0 0 0 43.350032-43.350032V154.550088a43.350032 43.350032 0 0 0-43.350032-43.350032zM879.384294 111.200056H606.105694a43.350032 43.350032 0 0 0-43.350032 43.350032v273.2786a43.350032 43.350032 0 0 0 43.350032 43.350032h273.2786a43.350032 43.350032 0 0 0 43.350032-43.350032V154.550088a43.350032 43.350032 0 0 0-43.350032-43.350032zM411.485726 554.844281H138.199901a43.350032 43.350032 0 0 0-43.350032 43.350032v273.285825a43.350032 43.350032 0 0 0 43.350032 43.350032h273.285825a43.350032 43.350032 0 0 0 43.350032-43.350032V598.194313a43.350032 43.350032 0 0 0-43.350032-43.350032zM879.384294 554.844281H606.105694a43.350032 43.350032 0 0 0-43.350032 43.350032v273.285825a43.350032 43.350032 0 0 0 43.350032 43.350032h273.2786a43.350032 43.350032 0 0 0 43.350032-43.350032V598.194313a43.350032 43.350032 0 0 0-43.350032-43.350032z" fill="#515151" p-id="2156"></path></svg>
    </h2>
    <div class="examples">
      <div class="left">
        <demo
          v-for="i, index in leftDoc"
          :key="index"
          :expand-all="expand"
          :doc="i"
          :root="root"
          :highlight="highlight"
          :slot-name="demoIndex('left', index)">
          <slot
            :name="demoIndex('left', index)"
            :slot="demoIndex('left', index)"/>
        </demo>
      </div>
      <div class="right">
        <demo
          v-for="i, index in rightDoc"
          :key="index"
          :expand-all="expand"
          :doc="i"
          :root="root"
          :highlight="highlight"
          :slot-name="demoIndex('right', index)">
          <slot
            :name="demoIndex('right', index)"
            :slot="demoIndex('right', index)"/>
        </demo>
      </div>
    </div>
  </div>
</template>

<script>
import Demo from './Demo.vue'

export default {
  name: 'Yuri',

  components: {
    Demo
  },

  props: {
    root: {
      type: String,
      default: '/docs/'
    },
    title: {
      type: String,
      default: 'Examples'
    },
    docList: {
      type: Array,
      default: () => ['demo.md']
    },
    expandAll: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: [Boolean, Function],
      default: true
    },
  },

  data () {
    return {
      expand: this.expandAll
    }
  },

  computed: {
    leftDoc () {
      return this.docList.filter((i, index) => {
        if (index % 2 === 0) return i
      })
    },
    rightDoc () {
      return this.docList.filter((i, index) => {
        if (index % 2 !== 0) return i
      })
    }
  },

  methods: {
    demoIndex (i, index) {
      return 'demo-' + (i === 'left' ? 2 * index : 2 * index + 1)
    },
  }
}

</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: 65px;
    svg {
      color: #555;
      width: 15px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .examples {
    margin: 0 -8px;
    display: inline-block;
    width: 100%;
    .left, .right {
      width: 50%;
      display: inline-block;
      float: left;
      padding: 0 8px;
      box-sizing: border-box;
      @media only screen and (max-width: 768px) {
        float: none;
        width: 100%;
      }
    }
  }
</style>
