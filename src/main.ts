import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { initializeApp } from 'firebase/app'

const app = createApp(App)

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
