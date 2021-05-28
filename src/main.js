import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'
const vue = createApp(App)
vue.use(VueSplide)
vue.mount('#app')
