<template lang="html">
  <div class="container blu">
    <ClickOutside v-if="showMonthSelector" @closeEvent="closeEvent" />
    <h1>Hello jello</h1>
    <div class="grid-container selector">
      <div class="one">
        <div class="container up" @click="increaseMonth">
          &#9650;
        </div>
        <div class="container card month" @click.stop="showMonthSelector = !showMonthSelector">
          {{ months[refMonth] }}

          <MonthSelector v-if="showMonthSelector" :monthhi="today.month" @pickedMonth="changeMonth($event)"/>
        </div>
        <div class="container down" @click="decreaseMonth">
          &#9660;
        </div>
      </div>
      <div class="two">
        <div class="container up" @click="refYear += 1">
          &#9650;
        </div>
        <div class="container card month">
          {{ refYear }}
        </div>
        <div class="container down" @click="refYear -= 1">
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
    MonthSelector: () => import("./calendar/MonthSelector.vue"),
    ClickOutside: () => import("./ClickOutside.vue")
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
    },
    closeEvent() {
      this.showMonthSelector = false;
    }
  }
}
</script>

<style lang="css">
.selector {
  display: grid;
  font-size: 20px;
  position: absolute;
  grid-gap: 5px;
  columns: 2;
  padding-left: 10px;
  grid-column-gap: 30px;
  box-shadow: 0 0 0 0;
  float: left;
  color: var(--shadow);
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
  height: 70px;
}
.month {
  border-radius: 2px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  height: 30px;
  width: 150px;
  color: #eee;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: var(--main);
}
.month:hover {
  cursor: pointer;
  color: var(--main);
  font-size: 25px;
  background-color: var(--highlight);
  cursor: pointer;
}
.up, .down {
  border-radius: 10px;
  border: 1px solid var(--highlight);
}
.up:hover {
  color: var(--accent);
  border-radius: 10px;
  border: 1px solid var(--accent);
  cursor: pointer;
  top: +1px;
}
.down:hover {
  color: var(--accent);
  border-radius: 10px;
  border: 1px solid var(--accent);
  cursor: pointer;
  top: +1px;
}
.blu {
  padding-top: 25px;
  background-image: linear-gradient(#fff, var(--lightmain), var(--secondary) 13%);
}
.calendar {
  padding-top: 20px;
  padding-bottom: 5px;
  border-top: 2px solid var(--main);
  background-image: linear-gradient(var(--highlight), #fff 3%);
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
    grid-gap: 10px;
    top: +65px;
    z-index: 110;
    font-size: 20px;
    border-radius: 10px;
    background-color: var(--lightmain);
  }
}
@media screen and (max-width: 350px) {
  .selector .card {
    max-width: 100px;
  }
}
</style>
