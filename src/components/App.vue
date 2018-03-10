<template>
  <div class="examples">
    <div class="left">
      <demo
        v-for="i, index in leftDoc"
        :key="index"
        :expand-all="expandAll"
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
        :expand-all="expandAll"
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
