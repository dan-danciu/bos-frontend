<template lang="html">
  <div class="">
    <ul :style="ulStyle">
      <li v-for="value in info" :key="value.user_id">{{ value.name }}</li>
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
      info: null,
      columns: 0
    }
  },
  computed: {
    ulStyle: function() {
      return {
        columns: this.columns,
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
        this.info = response.data.all_users;
        this.columns = Math.floor(this.info.length/5)+1;
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
