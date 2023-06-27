<template>
    <div>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">IsAdmin</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,index) in users" :key="user.id">
      <td>{{ user._id }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.password }}</td>
      <td>{{ user.isAdmin }}</td>
      <td>
        <button class="btn btn-sm btn-secondary mx-2" @click="editUser(user._id)" >Edit</button>
        <button class="btn btn-sm btn-danger mx-2" @click="delUser(index)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import userService from "../../services/usersService"
export default {
    name:'Dashboard',
    data(){
        return {
            users: []
        };
    },

    methods:{
        editUser(uid){
            console.log(uid);
            // this.$router.push('/admin/users/edit/'+_id)
            this.$router.push({name: 'uEdit' , params: {id:uid}})
        },
        delUser(index){
            console.log(index)
            console.log(this.users[index]._id)
            userService.deleteUser(this.users[index]._id)
                .then(res => this.users.splice(index, 1))
                .catch(err => console.log(err))
           
        }
    },
    mounted(){
        userService.getUsers()
            .then(res => {
                console.log(res.data)
                this.users = res.data
            })
    },
    
    created(){  
        userService.getUsers().then(res => {
            this.users = res.data;
        }) 
    }
}
</script>