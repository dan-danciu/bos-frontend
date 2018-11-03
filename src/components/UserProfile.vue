<template lang="html">
  <div id="userprofile">
    <div class="card">
      <div class="cardtop">
        <img :src="profile.image" alt="">
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

export default {
  props: {
    id_token: String,
    profile: Object
  },
  data: function() {
    return {
      message: '',
      showAlert: false
    }
  },
  mounted() {
    var vm = this;
    axios
      .get('https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev/' + this.profile.user_id, {
        headers: {
          "Authorization": this.id_token
        }
      })
      .then(response => {
        vm.profile.name = response.data.name;
        vm.profile.email = response.data.email;
        vm.profile.image = response.data.image;
        vm.profile.user_id = response.data.user_id;
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
