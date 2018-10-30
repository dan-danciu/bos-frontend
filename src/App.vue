<template>
  <div id="app" class="jumbotron">
    <b-container>
      <NavBar :signOut="signOut" :authenticated="authenticated"/>
      <google-auth v-if="id_token == ''" :attachSignin="attachSignin" @authenticated="auth2 = $event"/>
      <Home/>
    </b-container>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    Home,
    NavBar
  },
  data: function() {
    return {
      auth2: null,
      id_token: '',
      authenticated: false
    }
  },
  methods: {
    attachSignin(element) {

      var vm = this;
      this.auth2.attachClickHandler(element, {},
          function(googleUser) {
            vm.id_token = googleUser.getAuthResponse().id_token;
            vm.authenticated = true;
          }, function(error) {
            alert(JSON.stringify(error, undefined, 2));
          });
    },
    signOut() {
      var vm = this;
      this.auth2.signOut().then(function () {
        vm.id_token = '';
        vm.authenticated = false;
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
