<template lang="html">
    <div class="topnav" :class="{responsive: makeReactive}">
      <router-link
      @click.native="setActive('home')"
      to="/"
      class="brand">
        <strong>Amazing App</strong>
      </router-link>
      <router-link
      :class="{active: page==='home'}"
      @click.native="setActive('home')"
      to="/">
        Calendar
      </router-link>
      <router-link
      v-if="authenticated"
      :class="{active: page==='allusers'}"
      @click.native="setActive('allusers')"
      to="allusers">
        All Users
      </router-link>
      <a href="#" class="disabled" v-else>All Users</a>
      <div class="dropdown" v-if="authenticated" :class="{active: page==='user'}">
        <button href="#" class="dropbtn">User&#9662;</button>
        <div class="dropdown-content">
          <router-link
          @click.native="setActive('user')"
          to="user">
            Profile
          </router-link>
          <a href="#" @click="signOut">Signout</a>
        </div>
      </div>
      <a href="#" style="font-size:15px;" class="icon" @click="makeReactive = !makeReactive">&#9776;</a>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
      makeReactive: false,
      page: 'home'
    }
  },
  computed: {
    ...mapGetters('auth', {
      authenticated: 'isAuthenticated'
    })
  },
  methods: {
    setActive(page) {
      this.makeReactive = false
      this.page = page
    },
    signOut() {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>

<style lang="css" scoped>
.topnav {
  overflow: hidden;
  background-color: var(--main);
  box-shadow: 0 4px 8px 0 var(--shadow);
  display: block;
  top: -10px;
  width: 100%;
  position: absolute;
  z-index: 200;
}

.topnav a {
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav .active {
  background-color: var(--accent);
  color: var(--highlight);
  font-weight: bold;
}

.topnav .icon {
  display: none;
}

.dropdown {
    position: relative;
    float: left;
    display: inline-block;
}

.dropdown .dropbtn {
    font-size: 17px;
    border: none;
    outline: none;
    color: #000;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--secondary);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px #999;
    font-weight: normal;
    z-index: 1;
}

.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: var(--highlight);
  color: #fff;
}

.dropdown-content a:hover {
    background-color: var(--highlight);
    color: #fff;
}

.dropdown:hover .dropdown-content {
    display: block;
    position: fixed;
}

.topnav .disabled {
  color: var(--disabled);
}

@media screen and (max-width: 600px) {
  .topnav {
    position: fixed;
    z-index: 150;
  }
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    display: block;
    width: 100%;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
