<template>
  <div>
        <main class="form-signin w-100 m-auto">
  <form @submit.prevent="registerUser">

    <h1 class="h3 mb-3 fw-normal">Register</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="name" name="name" v-model="name">
      <label for="name">Name</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" id="username" name="username" v-model="username">
      <label for="username">Username</label>
    </div>


    <div class="form-floating">
      <input type="email" class="form-control"  placeholder="name@example.com" id="email" name="email" v-model="email">
      <label for="email">Email address</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control" id="password" name="password" v-model="password" >
      <label for="password">Password</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control"  placeholder="Password" id="confirm_password" name="confirm_password" v-model="confirm_password">
      <label for="confirm_password">Confirm Password</label>
    </div>

    <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/login" class="">Already have an account ?</router-link>
  </form>
  </main>
  <!-- <p v-if="showError" id="error">Username already exists</p> -->
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      name: "",
      email: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
   async registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name
      };
     await this.register(user)
      .then(res => {
        if (res) {
          this.$router.push("login");
        }
      });
     
    }
  }
};
// export default {
//   name: "Register",
//   components: {},
//   data() {
//     return {
//       form: {
//         username: "",
//         password: "",
//         confirm_password: "",
//         name: "",
//         email: ""
//       },
//       showError: false
//     };
//   },
//   methods: {
//     ...mapActions(["Register"]),
//     async submit() {
//       try {
//         await this.Register(this.form);
//         this.$router.push("/login");
//         this.showError = false
//       } catch (error) {
//         this.showError = true
//       }
//     },
//   },
// };


// import axios from "axios";
// export default {
// name: "Register",
//   data() {
//     return {
//       username: '',
//       password: '',
//       confirm_password: '',
//       name: '',
//       email: ''
//     }
//   },
//   methods: {
//     // ...mapActions(["register"]),
//     async registerUser() {
//     const response= await axios
//       .post(
//         '/api/users/register',
//         {
//         username: this.username,
//         password: this.password,
//         confirm_password: this.confirm_password,
//         email: this.email,
//         name: this.name
//       })
//        .then((response) => {
       
//            this.$router.push("/login");
//           console.log(response);
      
//        })
      
//     }
//   }
// };

</script>
