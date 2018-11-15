<template lang="html">
  <div>
    <p>Loading fast!</p>
    <hr>
    <div id="loading" class="card round"></div>
    <div id="loading" class="card round"></div>
    <div id="loading" class="card round"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#loading {
  -webkit-animation: rotation 1s infinite linear;
  text-align: right;
}
.round {
  display: inline-block;
  position: relative;
  height: 30px;
  width: 30px;
  margin: 10px;
  background-color: var(--main);
  border-radius: 50%;
}
@-webkit-keyframes rotation {
  from {
      -webkit-transform: rotate(0deg);
  }
  to {
      -webkit-transform: rotate(359deg);
  }
  0% {background-color: var(--main);}
  50% {background-color: var(--secondary);}
  100% {background-color: var(--main);}
}
</style>
