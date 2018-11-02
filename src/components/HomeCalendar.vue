<template lang="html">
  <div class="container blu">
    <h1>Hello jello</h1>
    <div class="grid-container selector">
      <div id="item1" class="container card up" @click="increaseMonth">
        &#9650;
      </div>
      <div id="item2" class="container card month" @click="showMonthSelector = !showMonthSelector">
        {{ months[refMonth] }}

        <MonthSelector v-if="showMonthSelector" :monthhi="today.month" @pickedMonth="changeMonth($event)"/>
      </div>
      <div id="item3" class="container card down" @click="decreaseMonth">
        &#9660;
      </div>
      <div id="item4" class="container card up" @click="refYear += 1">
        &#9650;
      </div>
      <div id="item5" class="container card year">
        {{ refYear }}
      </div>
      <div id="item6" class="container card down" @click="refYear -= 1">
        &#9660;
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
  display: grid;
  font-size: 15px;
  position: absolute;
  grid-gap: 10px;
  grid-column-gap: 30px;
  top: 30px;
  float: left;
  color: var(--main-color);
  top: -5px;
}
.month {
  padding: 5px;
  border-radius: 10%;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
.month:hover {
  background-color: var(--shadow-color);
  cursor: pointer;
}
.year {
  padding: 5px;
  border-radius: 10%;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
#item1 {
  grid-column: 1;
  grid-row: 1;
}
#item2 {
  grid-row: 2;
}
#item3 {
  grid-row: 3;
}
#item5 {
  grid-column: 2;
  grid-row: 2;
}
#item6 {
  grid-column: 2;
  grid-row: 3;
}
.up:hover {
  background-color: var(--shadow-color);
  cursor: pointer;
  top: +3px;
}
.down:hover {
  background-color: var(--shadow-color);
  cursor: pointer;
  top: +3px;
}
.blu {
  padding-top: 15px;
  background-image: linear-gradient(#fff, var(--main-color) 10%, var(--secondary-color));
}
.calendar {
  background-color: var(--bottom-color);
  padding-top: 20px;
  padding-bottom: 5px;
  border-top: 2px solid var(--middle-color);
  background-image: linear-gradient(var(--shadow-color), var(--bottom-color) 3%);
  overflow: none;
}
@media screen and (max-width: 600px) {
  .blu h1 {
    text-align: right;
    position: relative;
    top: 35px;
  }
  .selector {
    position: fixed;
    grid-gap: 5px;
    top: +50px;
    z-index: 150;
    font-size: 25px;
  }
}
</style>
