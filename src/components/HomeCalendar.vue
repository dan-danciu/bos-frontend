<template lang="html">
  <div class="">
    <h1>Hello jello</h1>
    <div class="selector">
      {{ present.month + 1 }} - {{ present.year }}
    </div>
    <div class="calendar">
      <Week :week="this.present.week" :refMonth="refMonth"/>
      <Week :week="this.present.week" :refMonth="refMonth"/>
      <Week :week="this.present.week" :refMonth="refMonth"/>
      <Week :week="this.present.week" :refMonth="refMonth"/>
    </div>
  </div>

</template>

<script>
export default {
  components: {
    Week: () => import("./Week.vue")
  },
  data: function() {
    return {
      date: null,
      present: {},
      daysOfWeek: ['Dan','Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      weeks: {},
      refMonth: 0
    }
  },
  created() {
    this.date = new Date();
    this.present.day = this.date.getDate();
    this.present.month = this.date.getMonth();
    this.refMonth = this.present.month;
    this.present.year = this.date.getFullYear();
    this.present.weekDayNumber = this.date.getDay();
    var week = [];
    for (var i = 0; i < 7; i++) {
      week[i]=new Date(this.date.getTime());
      week[i].setDate(this.present.day-this.present.weekDayNumber+i+1);
    }
    this.present.week = week;
    this.present.weekDay = this.daysOfWeek[this.present.weekDayNumber];

  },
  methods: {
    weekCreate() {

    }
  }
}
</script>

<style lang="css">
.selector {

  font-size: 20px;
}
.calendar {
  background-color: #eee;
  padding-top: 10px;
  padding-bottom: 5px;
  border-top: 2px solid #4facff;
  box-shadow: 0 8px 8px 0 #afddda inset;
  overflow: none;
}
</style>
