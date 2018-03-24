<template>
  <div class="examples">
    <div :class="boxClassName">
      <demo
        v-for="i, index in leftDoc"
        :key="index"
        :expand-all="expandAll"
        :doc="i"
        :highlight="highlight"
        :slot-name="demoIndex('left', index)">
        <slot
          :name="demoIndex('left', index)"
          :slot="demoIndex('left', index)"/>
      </demo>
    </div>
    <div class="right" v-if="!bigDemo">
      <demo
        v-for="i, index in rightDoc"
        :key="index"
        :expand-all="expandAll"
        :doc="i"
        :highlight="highlight"
        :slot-name="demoIndex('right', index)">
        <slot
          :name="demoIndex('right', index)"
          :slot="demoIndex('right', index)"/>
      </demo>
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
    docList: {
      type: Array,
      default: () => []
    },
    expandAll: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: [Boolean, Function],
      default: true
    },
    bigDemo: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    boxClassName () {
      return this.bigDemo ? 'code-box' : 'left'
    },
    leftDoc () {
      if (this.bigDemo) return this.docList
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
      let countIndex = this.bigDemo ? index : i === 'left' ? 2 * index : 2 * index + 1
      return 'demo-' + countIndex
    },
  }
}

</script>

<style lang="scss" scoped>
  .examples {
    margin: 0 -8px;
    display: inline-block;
    width: 100%;
    .code-box {
      padding: 0 8px;
    }
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
