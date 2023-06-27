<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" id="navbardSupportedContend">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active"> 
    <router-link to="/" class="nav-link text-white" >
       Home 
       </router-link> 
      </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link " > Login </router-link>
        </li>
        
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/register" class="nav-link" > Register </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn" >
          <router-link to="/reset" class="nav-link" > Reset </router-link>
        </li>

        <li class="nav-item" v-if="isLoggedIn" >
          <router-link to="/profil" class="nav-link" > Profil </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn && user.isAdmin" >
          <router-link to="/admin/dashboard" class="nav-link" > Dashboard </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a to="/logout" class="nav-link" @click.prevent="logoutUser">Logout</a>
        </li>
      </ul>
     
    </div>
  </nav>

    
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn","user"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>

