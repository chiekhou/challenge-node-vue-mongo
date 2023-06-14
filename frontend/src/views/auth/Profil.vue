<template>
    <div>
      <h2>Profil</h2>
      <div class="card" >
        <ul class="list-group">
          <li class="list-group-item">Email: {{ user.email }}</li>
          <li class="list-group-item">Username: {{ user.username }}</li>
          <li class="list-group-item">Name: {{ user.name }}</li>
        </ul>
      </div>
      <h3> Vous n'êtes pas connecté</h3>
    </div>
  </template>
  
  <script>
//   import axios from 'axios'
//   // import { mapActions, mapGetters } from "vuex";
//   export default {
//   //   computed: mapGetters(["user"]),
//   //   methods: {
//   //     ...mapActions(["getProfile"])
//   //   },
//   //   async created() {
//   //     this.getProfile();
//   //   }
//   // };

//   data() {
//     return {
//       user: null
//     }
//   },

//   async created() {
//     const response = await axios.get('http://localhost:6001/api/users/profil')
//     this.user = response.data;
//     console.log(this.user );
    
//   }
// }
  </script>
  
  <style>
  </style>