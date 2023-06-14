<template>
 <div>
      <h2>Home</h2>
      <div class="card">
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


// import axios from 'axios'

  export default {
    name: "Home",

}
</script>

