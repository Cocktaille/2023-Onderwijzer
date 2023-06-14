import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Popper from "vue3-popper";


const app = createApp(App)

app.use(createPinia())
app.component("Popper", Popper);

app.mount('#appwrapper')

