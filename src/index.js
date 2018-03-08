import Juri from './components/App.vue'

export default Juri

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Juri.name, Juri)
}
