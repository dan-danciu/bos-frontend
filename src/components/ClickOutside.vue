<template lang="html">
  <div id="click-outside" @click="closeEvent">

  </div>
</template>

<script>
export default {
  methods: {
    closeEvent() {
      this.$emit('closeEvent', true);
    }
  }
}
</script>

<style lang="css">
#click-outside {
  display: flex;
  position: absolute;
  width: 150%;
  height: 150%;
  margin: 0px;
  padding: 0px;
  top: -200px;
  left: -50px;
  z-index: 100;
}
</style>
