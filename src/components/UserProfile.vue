<template lang="html">
  <b-jumbotron :header="profile.name" :lead="profile.email">
    <img :src="profile.image" alt="">
  </b-jumbotron>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    'b-jumbotron': () => import("bootstrap-vue/es/components/jumbotron/jumbotron")
  },
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
</style>
