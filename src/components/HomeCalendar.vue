<template lang="html">
  <div class="container blu">
    <h1>Hello jello</h1>
    <div class="selector">
      <div class="container card up" @click="increaseMonth">
        &#9650;
      </div>
      <div class="container month" @click="showMonthSelector = !showMonthSelector">
        {{ months[refMonth] }}

        <MonthSelector v-if="showMonthSelector" :monthhi="today.month" @pickedMonth="changeMonth($event)"/>
      </div>
      <div class="container card down" @click="decreaseMonth">
        &#9660;
      </div>
      <div class="container year">
        {{ refYear }}
      </div>
    </div>
    <div class="calendar">
      <Week v-for="(week, index) in weeks" :key="index" :week="week" :today="today" :refMonth="refMonth"/>
    </div>
  </div>

</template>

<script>
export default {
  components: {
    Week: () => import("./calendar/Week.vue"),
    MonthSelector: () => import("./calendar/MonthSelector.vue")
  },
  data: function() {
    return {
      date: null,
      today: {},
      weekDayNumber: 0,
      weeks: [],
      refMonth: 0,
      refYear: 0,
      refDay: 0,
      showMonthSelector: false,
      showYearSelector: false,
      months: [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
      ]
    }
  },
  watch: {
    refMonth: function() {
      this.weeks = [];
      this.showMonthSelector = false;
      this.generateWeeks();
    },
    refYear: function() {
      this.weeks = [];
      this.generateWeeks();
    }
  },
  created() {
    this.date = new Date();
    this.refDay = this.today.day = this.date.getDate();
    this.refMonth = this.today.month = this.date.getMonth();
    this.refYear = this.today.year = this.date.getFullYear();
    this.weekDayNumber = this.date.getDay();
    this.generateWeeks();
  },
  methods: {
    generateWeeks() {
      let first = new Date(this.refYear, this.refMonth, 1);
      let dayow = first.getDay();
      first.setDate(first.getDate() - dayow + 1);
      this.weeks[0] = first;
      let month = this.refMonth;
      let i = 1;
      while (month==this.refMonth) {
        first = new Date(first.getTime());
        first.setDate(first.getDate() + 7);
        month = first.getMonth();
        if (month == this.refMonth) {
          this.weeks[i] = first;
        }
        i += 1;
      }
    },
    changeMonth(event) {
      this.refMonth = event;
    },
    increaseMonth() {
      if (this.refMonth < 11) {
        this.refMonth += 1;
      }
      else {
        this.refMonth = 0;
        this.refYear += 1;
      }
    },
    decreaseMonth() {
      if (this.refMonth > 0) {
        this.refMonth -= 1;
      }
      else {
        this.refMonth = 11;
        this.refYear -= 1;
      }
    }
  }
}
</script>

<style lang="css">
.selector {
  font-size: 15px;
  position: absolute;
  top: 30px;
  float: left;
  color: var(--main-color);
}
.selector .month {
  display: inline-block;
  border-radius: 10%;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
.selector .month:hover {
  background-color: var(--shadow-color);
  cursor: pointer;
  top: 2px;
}
.selector .year {
  display: inline-block;
  border-radius: 10%;
  background-color: #fff;
  left: 20px;
}
.up {
  display: block;
  position: absolute;
  top: -25px;
}
.up:hover {
  background-color: var(--shadow-color);
  cursor: pointer;
  top: -22px;
}
.down {
  display: block;
  position: absolute;
  top: 25px;
}
.down:hover {
  background-color: var(--shadow-color);
  cursor: pointer;
  top: 28px;
}
.blu {
  background-color: var(--bottom-color);
  box-shadow: 0 140px 80px -50px var(--main-color) inset;
}
.calendar {
  background-color: var(--bottom-color);
  padding-top: 20px;
  padding-bottom: 5px;
  border-top: 2px solid var(--main-color);
  box-shadow: 0 20px 15px -8px var(--shadow-color) inset;
  overflow: none;
}
@media screen and (max-width: 600px) {
  h1 {
    text-align: right;
    position: relative;
    top: 35px;
  }
}
</style>
