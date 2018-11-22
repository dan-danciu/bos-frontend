<template lang="html">
  <div id="userprofile">
    <div class="">
      something aint right:
      {{ user }} and {{ id_token }}
    </div>
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
import axios from 'axios'
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
  },
  created() {
    let vm = this
    axios
      .get('https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev/' + this.user.user_id, {
        headers: {
          "Authorization": this.id_token
        }
      })
      .then(response => {
        vm.$store.dispatch('auth/updateProfile', response.data)
      })
      .catch(error => {
        this.message = error;
        this.showAlert = true;
    });
  }
}
</script>

<style lang="css">
#userprofile img {
  object-fit: none;
}
</style>
