<template lang="html">
    <div class="topnav" :class="{responsive: makeReactive}">
      <a href="#" class="brand"><strong>Amazing App</strong></a>
      <router-link :class="{active: page=='home'}" @click="setPage('home')" to="/">Home</router-link>
      <a href="#" v-if="authenticated" :class="{active: page=='mystuff'}">My Stuff</a>
      <a href="#" class="disabled" v-if="!authenticated">My Stuff</a>
      <a href="#" v-if="authenticated" @click="setPage('allusers')" :class="{active: page=='allusers'}">All Users</a>
      <a href="#" class="disabled" v-if="!authenticated">All Users</a>
      <div class="dropdown" v-if="authenticated">
        <button href="#" class="dropbtn">User&#9662;</button>
        <div class="dropdown-content">
          <router-link @click="setPage('profile')" to="user">Profile</router-link>
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
    setPage(page) {
      this.makeReactive = false;
      this.page = page;
      this.$emit('pageChange', page);
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
  background-image: linear-gradient(to right, var(--main) , var(--secondary));
  box-shadow: 0 4px 8px 0 var(--shadow);
  display: block;
  top: -10px;
  width: 100%;
  position: absolute;
  z-index: 200;
}

.topnav .brand {
  color: #fff;
}

.topnav a {
  float: left;
  display: block;
  color: #ddd;
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
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--bottom);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px #999;
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
  color: var(--main);
}

.dropdown-content a:hover {
    background-color: #ddd;
    color: black;
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
