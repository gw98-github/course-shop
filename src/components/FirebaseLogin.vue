<template>
  <div>
    <button v-if="user" class="google-auth-button" @click="googleSignOut()">Wyloguj</button>
    <button v-if="!user" class="google-auth-button" @click="googleSignIn()">
      <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
      <span>Zaloguj się z Google</span>
    </button>
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
<style lang="scss" scoped>
@import '@/assets/globals.scss';
.google-auth-button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 24px;
  background-color: #ffffff;
  justify-content: center;
  border: none;
  border-radius: 4px;
  min-height: 36px;
  color: #5f6368;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (min-width: $tablet) {
    font-size: 11px;
  }
  @media (min-width: $desktop) {
    min-height: 40px;
  }
  @media (min-width: 1100px) {
    font-size: 12px;
    padding: 12px 24px;
  }
  &:hover {
    background-color: #f1f3f4;
  }

  &:active {
    transform: translateY(2px);
  }

  img {
    margin-right: 12px;
  }
}
</style>
