<template>
  <div id="app" class="container">

    <NavBar/><br>
    <div id="main" class="container">
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
    --main: #4facff;
    --lightmain: #d1e9ff;
    --secondary: #343e4f;
    --accent: #bc2c00;
    --bottom: #fff9f2;
    --highlight: #afddda;
    --disabled: #8d9fa8;
    --middle: #2eccb1;
    --shadow: #555;
    height: 100%;
    min-width: 100%;
    overflow-x: hidden;
    background-color: var(--lightmain);
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
