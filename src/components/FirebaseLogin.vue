<template>
  <div>
    <button v-if="user" @click="googleSignOut()">Wyloguj</button>
    <button v-if="!user" @click="googleSignIn()">Zaloguj</button>

    <div v-if="user">Elementy rekomendowane dla Ciebie {{ user.providerData[0].displayName }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

export default defineComponent({
  methods: {
    googleSignIn(): void {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential?.accessToken
          // The signed-in user info.
          const user = result.user
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.customData.email
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error)
          // ...
        })
      console.log(this.user, this.auth)
    },
    googleSignOut(): void {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        })
    }
  },
  data() {
    return {
      user: useCurrentUser(),
      auth: useFirebaseAuth()
    }
  },
  mounted() {}
})
</script>
