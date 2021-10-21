import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock, faPlane, faMapPin, faCalendar, faPen, faTrashAlt, faIdCard, faDoorOpen} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faLock, faPlane, faMapPin, faCalendar, faPen, faTrashAlt, faIdCard, faDoorOpen)

createApp(App).use(store).use(router).mount('#app')
