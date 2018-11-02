<template lang="html">
  <div class="grid-container monthselector">
    <div class="container" v-for="n in 12" :key="n" @click="pickMonth(n)" :class="{current: n - 1 == monthhi}">
      {{months[n - 1]}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    monthhi: 0
  },
  data: function() {
    return {
      month: 0,
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  methods: {
    pickMonth(n) {
      this.month = n - 1;
      this.$emit('pickedMonth', this.month);
    }
  }
}
</script>

<style lang="css">
.monthselector {
  background-color: #fff;
  display: inline-block;
  position: absolute;
  padding: 0;
  float: left;
  width: auto;
  z-index: 100;
}
.monthselector .container {
  color: #222;
  box-shadow: 0 5px 5px -2px var(--shadow-color) inset;
}
.monthselector .container:hover {
  color: var(--accent-color);
  background-color: var(--shadow-color);
  cursor: pointer;
}
.current {
  color: var(--secondary-color);
  background-color: var(--main-color);
}
</style>
