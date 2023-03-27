import { initializeApp } from 'firebase/app'
import { ref, getDatabase, get, set, update, child } from 'firebase/database'
import { useDatabaseObject } from 'vuefire'
// ... other firebase imports

const firebaseApp = initializeApp({
  // paste firebase config
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

  create(path: string, el: any) {
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
