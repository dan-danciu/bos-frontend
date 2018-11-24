<template lang="html">
  <div class="">
    <button type="button" name="button" @click="fetchUsers">Refresh</button>
    <div class="container">
      <ul :style="ulStyle">
        <li v-for="value in info" :key="value.user_id">{{ value.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data: function() {
    return {
      info: null,
      columns: 0
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
    if (this.id_token) {
      this.fetchUsers()
    }
  },
  methods: {
    fetchUsers() {
      axios
        .get('/all_users', {
          headers: {
            "Authorization": this.id_token
          }
        })
        .then(response => {
          this.info = response.data.all_users
          this.columns = Math.floor(this.info.length/5)+1
        })
        .catch(error => {
          this.message = error
          this.showAlert = true
      })
    }
  }
}
</script>

<style lang="css">
</style>
