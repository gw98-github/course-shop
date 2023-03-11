import { initializeApp } from 'firebase/app'
import { ref, getDatabase, get, set, update, child } from 'firebase/database'
import { useDatabaseObject } from 'vuefire'
// ... other firebase imports

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAa83RgfJFMYPyEdXBsDYQ0raIB6rjDjvA',
  authDomain: 'shop-e919e.firebaseapp.com',
  databaseURL: 'https://shop-e919e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'shop-e919e',
  storageBucket: 'shop-e919e.appspot.com',
  messagingSenderId: '388988547964',
  appId: '1:388988547964:web:28c90b8803a8a08770aaf9'
})

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
const shopRef = useDatabaseObject(ref(db, 'shop'))

class FirebaseService {
  getAll() {
    return shopRef
  }

  get(path: string) {
    return get(child(ref(db, 'shop'), path))
  }

  create(path: string, el: string) {
    return set(ref(db, 'shop/' + path), el)
  }

  update(path: string, el: object) {
    return update(ref(db, 'shop/' + path), el)
  }

  delete(path: string) {
    return set(ref(db, 'shop/' + path), null)
  }
}

export default new FirebaseService()
