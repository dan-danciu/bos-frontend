<template lang="html">
  <div class="grid-container">
    <day v-for="(day, index) in weekDays" :key="index" :date="day" :today="today" :refMonth="refMonth" :class="{day7: index == 6}"/>
  </div>
</template>

<script>
export default {
  components: {
    Day: () => import("./Day.vue")
  },
  props: {
    week: Date,
    refMonth: Number,
    today: {}
  },
  data: function() {
    return {
      weekDays: []
    }
  },
  watch: {
    week: function() {
      this.weekDays = [];
      this.weekDays[0] = this.week;
      for (var i = 1; i < 7; i++) {
        let newDay = new Date(this.week.getTime());
        newDay.setDate(this.week.getDate() + i);
        this.weekDays[i] = newDay;
      }
    }
  },
  created() {
    this.weekDays[0] = this.week;
    for (var i = 1; i < 7; i++) {
      let newDay = new Date(this.week.getTime());
      newDay.setDate(this.week.getDate() + i);
      this.weekDays[i] = newDay;
    }
  }
}
</script>

<style lang="css">
.day7 {
  grid-column: 7;
}
@media screen and (max-width: 600px) {
  .grid-container {
    grid-gap: 0px;
    padding: 0px;
    padding-top: 5px;
  }
}
@media screen and (min-width: 601px, max-width: 960px) {
  .grid-container {
    grid-gap: 0px;
    padding: 3px;
    padding-top: 5px;
  }
}
</style>
