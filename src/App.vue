<template>
  <div id="app" class="bg">

    <NavBar :signOut="signOut" :authenticated="authenticated" @pageChange="page = $event"/>
    <b-card>
      <google-auth v-if="id_token == ''" :attachSignin="attachSignin" @authenticated="auth2 = $event"/>
      <Home v-if="page == 'home'"/>
      <UserProfile :id_token="id_token" :profile="profile" v-if="page == 'profile'"/>
      <AllUsers :id_token="id_token" v-if="page == 'allusers'"/>
    </b-card>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'app',
  components: {
    Home: () => import("./components/Home.vue"),
    NavBar: () => import("./components/NavBar.vue"),
    UserProfile: () => import("./components/UserProfile.vue"),
    AllUsers: () => import("./components/AllUsers.vue"),
    'b-card': () => import("bootstrap-vue/es/components/card/card")
  },
  data: function() {
    return {
      auth2: null,
      id_token: '',
      profile: {},
      authenticated: false,
      page: 'login',
      loading: false,
      message: '',
      showAlert: false
    }
  },
  methods: {
    attachSignin(element) {
      var vm = this;
      this.auth2.attachClickHandler(element, {},
          function(googleUser) {
            vm.id_token = googleUser.getAuthResponse().id_token;
            vm.authenticate();
          }, function(error) {
            alert(JSON.stringify(error, undefined, 2));
          });
    },
    authenticate() {
      this.loading = true;
      axios
        .get('https://hzyo7y0ukj.execute-api.eu-west-1.amazonaws.com/dev/auth', {
          headers: {
            "Authorization": this.id_token
          }
        })
        .then(response => {
          this.profile.name = response.data.name;
          this.profile.email = response.data.email;
          this.profile.image = response.data.image;
          this.profile.user_id = response.data.user_id;
          this.message = this.profile.name + " - authenticated successfully!";
          this.authenticated = true;
          this.showAlert = true;
          this.loading = false;
          this.page = 'home';
        })
    },
    signOut() {
      var vm = this;
      this.auth2.signOut().then(function () {
        vm.id_token = '';
        vm.authenticated = false;
        vm.page = 'login';
      });
    },
    setPage(value) {
      this.page = value;
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
  }

  html {
    background-color: #eeeeee;
    height: 100%;
  }
</style>
