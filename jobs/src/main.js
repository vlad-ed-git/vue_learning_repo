import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//in above import, we do not type router/index.js because index is the default file name to import

createApp(App).use(router).mount('#app')
