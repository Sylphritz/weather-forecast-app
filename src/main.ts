import './assets/styles/base.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Load stores
// import './stores/theme'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
