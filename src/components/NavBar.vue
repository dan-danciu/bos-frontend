<template lang="html">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Amazing App</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#" @click="setPage('home')">Home</b-nav-item>
          <b-nav-item href="#" v-if="authenticated">My Stuff</b-nav-item>
          <b-nav-item href="#" disabled v-if="!authenticated">My Stuff</b-nav-item>
          <b-nav-item href="#" v-if="authenticated" @click="setPage('allusers')">All Users</b-nav-item>
          <b-nav-item href="#" disabled v-if="!authenticated">All Users</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right v-if="authenticated">
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#" @click="setPage('profile')">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="signOut">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  components: {
    'b-navbar': () => import("bootstrap-vue/es/components/navbar/navbar"),
    'b-navbar-nav': () => import("bootstrap-vue/es/components/navbar/navbar-nav"),
    'b-navbar-brand': () => import("bootstrap-vue/es/components/navbar/navbar-brand"),
    'b-navbar-toggle': () => import("bootstrap-vue/es/components/navbar/navbar-toggle"),
    'b-nav-item': () => import("bootstrap-vue/es/components/nav/nav-item"),
    'b-nav-item-dropdown': () => import("bootstrap-vue/es/components/nav/nav-item-dropdown"),
    'b-dropdown-item': () => import("bootstrap-vue/es/components/dropdown/dropdown-item"),
    'b-collapse': () => import("bootstrap-vue/es/components/collapse/collapse")
  },
  props: {
    signOut: Function,
    authenticated: Boolean
  },
  methods: {
    setPage(page) {
      this.$emit('pageChange', page);
    }
  }
}
</script>

<style lang="css">
</style>
