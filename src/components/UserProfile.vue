<template lang="html">
  <div id="userprofile">
    <div class="card">
      <div class="cardtop">
        <img :src="this.user.image" alt="">
      </div>
      <div class="container">
        <h4><strong>{{ user.name }}</strong></h4>
        <p>{{ user.email }}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  computed: {
      user() { return this.$store.state.auth.profile },
      id_token() { return this.$store.state.auth.id_token }
  }
}
</script>

<style lang="css">
#userprofile img {
  object-fit: none;
}
</style>
