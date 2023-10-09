import './assets/main.css'
import './assets/scss/app.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
