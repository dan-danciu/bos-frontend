<template lang="html">
    <div id="gSignInWrapper" class="">
      <br><br>
      <span class="label">Sign in with:</span>
      <div id="customBtn" class="customGPlusSignIn">
        <span class="icon"></span>
        <span class="buttonText">Google</span>
      </div>
      <br><br><br>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      auth2: null,
      token: ''
    }
  },
  mounted() {
    let vm = this;
    window.gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      vm.auth2 = window.gapi.auth2.init({
        client_id: '260183799410-3agediepvbmo0n1j23jk4se5jkgnm382.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      vm.attachSignin(document.getElementById('customBtn'));
    });
  },
  methods: {
    ...mapActions ('auth', [
      'setToken',
      'createAuth2'
    ]),
    attachSignin(element) {
      let vm = this;
      this.auth2.attachClickHandler(element, {},
          function(googleUser) {
            vm.token = googleUser.getAuthResponse().id_token;
            //vm.$emit('authenticated', {'id_token':vm.id_token, 'auth':vm.auth2});
            //eventBus.$emit('authenticated', {'id_token':vm.id_token, 'auth2':vm.auth2});
            //vm.authenticate();
          }, function(error) {
            alert(JSON.stringify(error, null, 2));
          });
    }
  },
  watch: {
    token: function() {
      this.setToken(this.token);
    },
    auth2: function() {
      this.createAuth2(this.auth2);
    }
  }
}
</script>

<style lang="css">
#customBtn {
  display: inline-block;
  background: white;
  color: #444;
  width: 190px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
}
#customBtn:hover {
  cursor: pointer;
}
span.label {
  font-family: serif;
  font-weight: normal;
}
span.icon {
  background: url('/identity/g-normal.png') transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
}
span.buttonText {
  display: inline-block;
  vertical-align: middle;
  padding-left: 42px;
  padding-right: 42px;
  font-size: 14px;
  font-weight: bold;
  /* Use the Roboto font that is loaded in the <head> */
  font-family: 'Roboto', sans-serif;
}
</style>
