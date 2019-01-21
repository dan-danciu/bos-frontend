<template lang="html">
  <div id="daycards" class="grid-container">
    <Day id="day" v-for="(day, index) in weekDays" :key="index" :date="day" :today="today" :refMonth="refMonth" :class="['day'+(index+1)]"/>
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
    week() {
      this.calculateWeek();
      }
  },
  created() {
    this.calculateWeek();
  },
  methods: {
    calculateWeek() {
      this.weekDays = [];
      this.weekDays[0] = this.week;
      for (var i = 1; i < 7; i++) {
        let newDay = new Date(this.week.getTime());
        newDay.setDate(this.week.getDate() + i);
        this.weekDays[i] = newDay;
      }
    }
  }
}
</script>

<style lang="css">
.day1 {grid-column: 1;}
.day2 {grid-column: 2;}
.day3 {grid-column: 3;}
.day4 {grid-column: 4;}
.day5 {grid-column: 5;}
.day6 {grid-column: 6;}
.day7 {grid-column: 7;}
@media screen and (max-width: 600px) {
  #daycards {
    display: block;
    padding: 10px;
  }
}
@media screen and (min-width: 601px, max-width: 960px) {
  #daycards {
    grid-gap: 5px;
    padding: 3px;
    padding-top: 5px;
  }
}
</style>
