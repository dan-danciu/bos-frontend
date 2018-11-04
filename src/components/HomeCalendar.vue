<template lang="html">
  <div class="container blu">
    <h1>Hello jello</h1>
    <div class="grid-container selector">
      <div class="one">
        <div class="container up" @click="increaseMonth">
          &#9650;
        </div>
        <div class="container card month" @click="showMonthSelector = !showMonthSelector">
          {{ months[refMonth] }}

          <MonthSelector v-if="showMonthSelector" :monthhi="today.month" @pickedMonth="changeMonth($event)"/>
        </div>
        <div class="container down" @click="decreaseMonth">
          &#9660;
        </div>
      </div>
      <div class="card two">
        <div class="container card up" @click="refYear += 1">
          &#9650;
        </div>
        <div class="container year">
          {{ refYear }}
        </div>
        <div class="container card down" @click="refYear -= 1">
          &#9660;
        </div>
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
      if (dayow == 0) {
        dayow = 7;
      }
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
  display: grid;
  font-size: 25px;
  position: absolute;
  grid-gap: 0px;
  columns: 2;
  padding-left: 10px;
  grid-column-gap: 50px;
  box-shadow: 0 0 0 0;
  float: left;
  color: var(--shadow-color);
  top: +5px;
  z-index: 100;
}
.one {
  grid-column: 1;
  grid-row: 1;
}
.two {
  grid-column: 2;
  grid-row: 1;
}
.month {
  border-radius: 2px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
.month:hover {
  background-color: var(--highlight-color);
  cursor: pointer;
}
.year {
  border-radius: 2px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}

.up:hover {
  color: var(--accent-color);
  background-color: var(--highlight-color);
  cursor: pointer;
  top: +1px;
}
.down:hover {
  color: var(--accent-color);
  background-color: var(--highlight-color);
  cursor: pointer;
  top: +1px;
}
.blu {
  padding-top: 25px;
  background-image: linear-gradient(#fff, var(--main-color) 10%, var(--secondary-color));
}
.calendar {
  padding-top: 20px;
  padding-bottom: 5px;
  border-top: 2px solid var(--main-color);
  background-image: linear-gradient(var(--highlight-color), #fff 3%);
  overflow: none;
}
@media screen and (max-width: 900px) {
  .blu h1 {
    text-align: right;
    position: relative;
    top: 35px;
  }
}
@media screen and (max-width: 600px) {
  .selector {
    position: fixed;
    grid-gap: 5px;
    top: +65px;
    z-index: 150;
    font-size: 20px;
  }
}
</style>
