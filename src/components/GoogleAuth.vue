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

export default {
  mounted() {
    this.$store.dispatch('auth/gAuth', true)
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
