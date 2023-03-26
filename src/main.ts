import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { initializeApp } from 'firebase/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)
library.add(faUserSecret)
library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(VueFire, {
  firebaseApp: initializeApp({
    apiKey: 'AIzaSyAa83RgfJFMYPyEdXBsDYQ0raIB6rjDjvA',
    authDomain: 'shop-e919e.firebaseapp.com',
    databaseURL: 'https://shop-e919e-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'shop-e919e',
    storageBucket: 'shop-e919e.appspot.com',
    messagingSenderId: '388988547964',
    appId: '1:388988547964:web:28c90b8803a8a08770aaf9'
  }),
  modules: [
    // ... other modules
    VueFireAuth()
  ]
})

app.mount('#app')
