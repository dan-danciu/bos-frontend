<template lang="html">
  <div class="container monthselector">
    <div class="card month" v-for="n in 12" :key="n" @click="pickMonth(n)" :class="{current: n - 1 == monthhi}">
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
  position: absolute;
  columns: 2;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
  z-index: 100;
}
.monthselector .month:hover {
  color: var(--accent-color);
  background-color: var(--highlight-color);
  cursor: pointer;
}
.month {
  width: 150px;
}
.current {
  color: var(--secondary-color);
  background-color: var(--main-color);
}
</style>
