<template>
  <div>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="Login">
        <input type="text" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <input type="submit" value="Login" />
      </form>
      <router-link to="/">Back to website</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "@/firebase";

export default {
  setup() {
    const email = ref("admin@arenacoin.gg");
    // const password = ref("D1Ql3ZE5kaGCkobNb");  //production
    const password = ref("acP@ssword"); //staging

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };

    return {
      email,
      password,
      Login,
    };
  },
};
</script>
