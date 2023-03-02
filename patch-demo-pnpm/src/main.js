import { createApp } from 'vue'
import App from './App.vue'
import XPicker from "x-picker";

const app = createApp(App)
app.use(XPicker)
app.mount('#app')
