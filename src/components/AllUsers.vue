<template lang="html">
  <div class="">
    <div class="container">
      <ul :style="ulStyle">
        <li v-for="value in info" :key="value.user_id">{{ value.name }}</li>
      </ul>
    </div>
    <Loading v-if="loading"/>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  props: {
    id_token: String
  },
  data: function() {
    return {
      info: null,
      columns: 0,
      loading: false
    }
  },
  computed: {
    ...mapState('auth', {
      id_token: 'id_token'
    }),
    ulStyle: function() {
      return {
        columns: this.columns,
        listStyleType: 'circle'
      }
    }
  },
  mounted() {
    this.loading = true;
    axios
      .get('/all_users', {
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
    this.loading = false;
  }
}
</script>

<style lang="css">
</style>
