<template lang="html">
  <div id="userprofile">
    <div class="card">
      <div class="cardtop">
        <img :src="this.user.image" alt="">
      </div>
      <div class="container">
        <h4><strong>{{ user.name }}</strong></h4>
        <p>{{ user.email }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
      ...mapState('auth', {
        user: 'profile',
        id_token: 'id_token'
      })
  }
}
</script>

<style lang="css">
#userprofile img {
  object-fit: none;
}
</style>
