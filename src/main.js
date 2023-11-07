import { createApp } from 'vue'
import App from './App.vue'

import '/src/assets/styles/style.css'

import router from "./router.js"

createApp(App)
  .use(router)
  .mount('#app')
