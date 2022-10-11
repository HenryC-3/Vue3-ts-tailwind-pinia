import { createApp } from 'vue'
import { createPinia } from 'pinia'
import IconComponent from './basic-components/IconComponent.vue'
import './index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('IconComponent', IconComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
