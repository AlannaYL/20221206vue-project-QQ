import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @/代表src資料夾
import '@/sass/main.sass'

const app = createApp(App)

app.use(router)

app.mount('#app')
