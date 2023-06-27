<template>
    <div>
       
        <main class="form-signin w-100 m-auto">
  <form @submit.prevent="edit">
    <h1>Éditer un utilisateur</h1>

    <input type="text" id="user_id" v-model="user.id" hidden />
    <div class="form-floating">
      <input type="text" class="form-control" id="name" name="name" v-model="user.name">
      <label for="name">Name </label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" id="username" name="username" v-model="user.username">
      <label for="username">Username</label>
    </div>


    <div class="form-floating">
      <input type="email" class="form-control"  placeholder="name@example.com" id="email" name="email" v-model="user.email">
      <label for="email">Email</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control" id="password" name="password" v-model="user.password" >
      <label for="password">Password </label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control"  placeholder="Password" id="confirm_password" name="confirm_password" v-model="user.confirm_password">
      <label for="confirm_password">Confirm Password</label>
    </div>

    <button class="btn btn-primary w-100 py-2" type="submit">Update</button>
  </form>
  </main>
  <!-- <p v-if="showError" id="error">Username already exists</p> -->
</div>

</template>

<script>
import userService from '../../../services/usersService'
import axios from 'axios'
export default {
    name:'UserEdit',
    props: ['id'],
    data(){
       return{
        user: {},
       }
    },
    methods:{
        // Envoi à l'API pour modification
        edit(){ 
            userService.updateUser(this.user)
                .then(res => {
                    this.$router.push('/admin/dashboard')     
                })
                .catch(err => console.log(err))
        }
    },
    mounted(){
        // Récupération à l'affichae de l'utilisateur
        userService.getUser(this.id)
            .then(res => {
                console.log(res)
                this.user = res.data
            })
            .catch(err => console.log(err))
    }
}
</script>