<template lang="html">
  <div class="">
    <ul :style="ulStyle">
      <li v-for="value in response.all_users">{{ value.name }}</li>
    </ul>
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
  computed: {
    ulStyle: function() {
      return {
        columns: Math.floor(this.response.all_users.length/5)+1,
        listStyleType: 'circle'
      }
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
