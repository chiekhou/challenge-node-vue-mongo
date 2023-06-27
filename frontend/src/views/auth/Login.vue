<template>
        <main class="form-signin w-100 m-auto">
  <form @submit.prevent="loginUser">

    <h1 class="h3 mb-3 fw-normal">Login in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" v-model="email" id="email" name="email">
      <label for="email">Email</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control"  v-model="password" placeholder="Password" id="password" name="password">
      <label for="password">Password</label>
    </div>

    <input type="submit" class="btn btn-primary w-100 py-2" valeur="Login">
    &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/register" class=""> Need an account ?</router-link>
    <!-- <p v-if="showError" id="error">Email ou mot de passe incorrect</p> -->

  </form>

  </main>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';
// import { useRouter } from 'vue-router';

export default {
  name: "Login",
  data() {
    return {
        email: "",
        password: ""
    }
  },
  methods: {
    ...mapActions(["login"]),
   loginUser() {
    let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
            console.log(res.data.token)
            this.$router.push("/profil");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};

</script>
