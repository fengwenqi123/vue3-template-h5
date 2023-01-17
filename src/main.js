import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import './styles/index.scss'
import { loadVant } from '@/utils/load-vant'
const app = createApp(App)
loadVant(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
