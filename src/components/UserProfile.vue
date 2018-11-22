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

import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
      message: '',
      showAlert: false
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'userProfile',
      id_token: 'idToken'
    })
  }
}
</script>

<style lang="css">
#userprofile img {
  object-fit: none;
}
</style>
