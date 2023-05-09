import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import icons from 'bootstrap-icons/font/bootstrap-icons.css'
import VueCookies from 'vue-cookies'

import './style.css'
const pinia = createPinia();
import App from './App.vue'

createApp(App)
.use(pinia)
.use(router)
.use(bootstrap)
.use(icons)
.use(VueCookies)
.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA6r0Yu0jXjGOqyeEmJPXzS-9cwC_eNJE8',
        autobindAllEvents: true
    }
})
.mount('#app')


// Nueva API KEY GOOGLE MAPS: AIzaSyA6r0Yu0jXjGOqyeEmJPXzS-9cwC_eNJE8