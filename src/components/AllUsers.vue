<template lang="html">
  <div class="">
    {{ response.all_users }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    id_token: String
  },
  data: function() {
    return {
      response: null
    }
  },
  mounted() {
    axios
      .get('https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev/all_users', {
        headers: {
          "Authorization": this.id_token
        }
      })
      .then(response => {
        this.response = response.data;
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
