<template>
        <main class="form-signin w-100 m-auto">
  <form @submit.prevent="loginUser">

    <h1 class="h3 mb-3 fw-normal">Login in</h1>

    <div class="form-floating">
      <input type="email" class="form-control"  v-model="email" id="email" name="email">
      <label for="email">Email</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control"  placeholder="Password" id="password"  v-model="password" name="password">
      <label for="password">Password</label>
    </div>

    <input type="submit" class="btn btn-primary w-100 py-2" value="Login">
    &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/register" class=""> Need an account ?</router-link>

  </form>

  </main>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return{
      email: "",
      password: ""
    };
  
  },
  methods: {
    ...mapActions(["login"]),
   loginUser() {
      let user = {
       email : this.email,
       password : this.password
      };
      
    this.login(user)
    .then(res =>{
        if(res.data.success)
        console.log(res);
        
      }).catch(err => {
          console.log(err);
        });
     
    }
  }
  };

//   import axios from 'axios';
// export default {
//   data(){
//     return {
//         email:'',
//         password:''
//     }
//   },
//   methods: {
//    async loginUser(){
//     const response= await axios
//       .post(
//         `http://localhost:6001/api/users/login`,
//         { email:this.email, password: this.password}
//         );

//         localStorage.setItem('token', response.data.token)
//         this.$router.push("/profil")
//     }
//   }
// };
</script>
