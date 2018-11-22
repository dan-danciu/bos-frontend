<template lang="html">
  <div id="userprofile">
    <div class="">
      something aint right:
      {{ profile }}
    </div>
    <div class="card">
      <div class="cardtop">
        <img :src="this.profile.image" alt="">
      </div>
      <div class="container">
        <h4><strong>{{ profile.name }}</strong></h4>
        <p>{{ profile.email }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      message: '',
      showAlert: false
    }
  },
  computed: {
    ...mapGetters({
      profile: 'userProfile',
      id_token: 'idToken'
    })
  },
  methods: {
    ...mapActions('auth', [
      'updateProfile'
    ])
  },
  created() {
    axios
      .get('https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev/' + this.profile.user_id, {
        headers: {
          "Authorization": this.id_token
        }
      })
      .then(response => {
        this.updateProfile(response.data)
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
