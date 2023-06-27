<template>
    <form @submit="handleSubmit">
        <h3>Reset Password</h3>

        <div class="form-group">
            <label> Password </label>
            <input type="password" class="form-control" v-model="password" placeholder="Password" />
        </div>

        <div class="form-group">
            <label> Password Confirm</label>
            <input type="password" class="form-control" v-model="confirm_password" placeholder="Password Confirm" />
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Reset',
    data() {
        return {
            password: '',
            confirm_password:''
        }
    },
    methods: {
        async handleSubmit(){
            const res = await axios.post('reset', {
                password : this.password,
                confirm_password: this.confirm_password,
                
            });
            console.log(res)
        }
    }
}
</script>
