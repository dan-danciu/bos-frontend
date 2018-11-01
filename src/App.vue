<template>
  <div id="app" class="bg">

    <NavBar :signOut="signOut" :authenticated="authenticated" @pageChange="page = $event"/><br>
    <div class="container">
      <div class="card">
        <google-auth v-if="id_token == ''" :attachSignin="attachSignin" @authenticated="auth2 = $event"/>
        <HomeCalendar v-if="page == 'home'"/>
        <UserProfile :id_token="id_token" :profile="profile" v-if="page == 'profile'"/>
        <AllUsers :id_token="id_token" v-if="page == 'allusers'"/>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'app',
  components: {
    HomeCalendar: () => import("./components/HomeCalendar.vue"),
    NavBar: () => import("./components/NavBar.vue"),
    UserProfile: () => import("./components/UserProfile.vue"),
    AllUsers: () => import("./components/AllUsers.vue"),
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
      showAlert: false,
      windowWidth: 0,
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
    background-color: #eee;
    height: 100%;
  }

  .bg {
    background-color: #eee;
  }

  .card {
    box-shadow: 0 4px 8px 0 #999;
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
  }
  /* Add rounded corners to the top left and the top right corner of the image */
  .cardimg {
    border-radius: 5px 5px 0 0;
  }
  .container {
      padding: 2px 16px;
  }
</style>
