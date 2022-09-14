import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import routes from './route/routes'

axios.defaults.baseURL = 'http://127.0.0.1:8000';
createApp(App).use(routes).mount('#app')
