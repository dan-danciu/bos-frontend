<template lang="html">
  <div class="grid-container">
    <DaySmall id="day" v-for="(day, index) in weekDays" :key="index" :date="day" :today="today" :refMonth="refMonth" :class="['day'+(index+1)]"/>
  </div>
</template>

<script>
export default {
  components: {
    DaySmall: () => import("./DaySmall.vue")
  }
}
</script>

<style lang="css" scoped>
</style>
