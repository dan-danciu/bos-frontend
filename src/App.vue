<template>
  <div id="app" class="container">


    <div id="main" class="container">
      <NavBar/><br>
      <br><br>
      <div class="card">
        <keep-alive>
          <router-view v-show="!loading"></router-view>
        </keep-alive>
        <Loading v-if="loading"/>
      </div>
    </div>

  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    NavBar: () => import("./components/NavBar.vue")
  },
  data: function() {
    return {
      windowWidth: 0
    }
  },
  computed: {
    ...mapState('auth', { loading: 'loading'})
  },
  created() {
    this.$store.dispatch('auth/tryAutoLogin')
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
  #main {
    max-width: 1200px;
  }
  * {
    box-sizing: border-box;
  }
  html {
    --main: #FA7268;
    --lightmain: #fff;
    --secondary: #f9c4c0;
    --accent: #bc2c00;
    --highlight: #ff483a;
    --disabled: #a08888;
    --shadow: #514342;
    height: 100%;
    min-width: 100%;
    overflow-x: hidden;
    background-color: var(--shadow);
  }
  .grid-container {
    display: grid;
    grid-template-rows: auto;
    grid-gap: 1px;
    padding: 5px;
    padding-bottom: 20px;
  }
  .card {
    display: flex;
    flex-flow: column;
    box-shadow: 0 4px 8px 0 var(--shadow);
    transition: 0.3s;
    border-radius: 5px;
    background-color: #fff;
    width: auto;
  }
  .cardtop {
    display: flex;
    flex-flow: column;
    border-radius: 5px 5px 0 0;
  }
  .cardbot {
    display: flex;
    background-color: #fff;
    height: auto;
  }
  .container {
      display: block;
      position: relative;
      width: auto;
      border-radius: 5px;
  }
  .clickable {
    cursor: pointer;
  }
  @media screen and (min-width: 1200px) {
    #main {
      margin-left: 10%;
    }
  }
</style>
