<template lang="html">
  <div id="day" :class="{outside: month != refMonth}">
    <div class="grid-container" :class="{today: datesEqual, weekend: isWeekend}">
      <div class="card caltop">
        <div class="ear1">'</div><div class="ear2">'</div>
        <div class="daytext" :class="{weekend: isWeekend}"><strong> {{ day }}</strong>
          <div class="weekday">{{ daysOfWeek[weekDay] }}</div>
        </div>
      </div>
      <div class="card whole">

        <div class="cardtop">
          <div class="daytop">

          </div>
          <div class="addentry" id="show-modal" @click="showModal = true">
            <p>Add entry</p> +


          </div>

        </div>
      </div>

    </div>
    <addEntry v-if="showModal" @close="showModal = false" @submit = "submitVacation">
      <h3 slot="header">Vacation</h3>
      <div slot="body">
        <div class="">
          From: {{ day }}-{{ months[month] }}-{{ year }}
        </div>
        <div class="">
          To: {{ day }}-{{ months[month] }}-{{ year }}
        </div>
      </div>
    </addEntry>
  </div>

</template>

<script>
export default {
  components: {
    addEntry: () => import("./AddEntry.vue")
  },
  props: {
    date: Date,
    refMonth: Number,
    today: Object
  },
  watch: {
    date: function() {
      this.setUp();
    }
  },
  data: function() {
    return {
      daysOfWeek: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      weekDay: 0,
      day: 0,
      month: 0,
      year: 0,
      showModal: false,
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
  created() {
    this.setUp();
  },
  computed: {
    datesEqual: function() {
      return this.today.day == this.date.getDate() &&
        this.today.month == this.date.getMonth() &&
        this.today.year == this.date.getFullYear()
    },
    isWeekend: function() {
      return this.weekDay == 0 || this.weekDay == 6
    },
    selectedDate: function() {
      return this.day
    }
  },
  methods: {
    setUp() {
      this.weekDay = this.date.getDay()
      this.day = this.date.getDate()
      this.month = this.date.getMonth()
      this.year = this.date.getFullYear()
    },
    submitVacation() {
      console.log('trololo')
      this.showModal = false
    }
  }
}
</script>

<style lang="css">
#day .grid-container {
  grid-gap: 1px;
  padding: 1px;
  height: 100%;
  border-radius: 10px;
}
#day .daytop {
  height: 50px;
  border-radius: 5px;
}
.round {
  position: relative;
  height: 25px;
  width: 25px;
  background-color: var(--main);
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  top: -5px;
}
.today {
  box-shadow: 0px 0px 20px 9px var(--highlight);
  font-weight: bolder;
  z-index: 5;
  background-image: linear-gradient(var(--accent), var(--main) 55%);
}
.today .weekend, .today .weekday, .today .weekend .weekday {
  background-color: var(--highlight);
  color: #fff;
}
.today .daytop {
  background-color: var(--secondary);
}
.today .weekday {
  font-size: 20px;
}
.outside {
  color: var(--disabled);
}
.outside .weekday {
  color: var(--disabled);
  text-shadow: 0 0 0;
}
.ear1 {
  display: inline-block;
  color: var(--secondary);
  background-color: var(--main);
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top: 1px solid var(--main);
  border-left: 1px solid var(--main);
  border-right: 1px solid var(--main);
  width: 10%;
  height: 15px;
  top: -15px;
  left: 10%;
}
.today .ear1, .today .ear2 {
  background-color: var(--highlight);
}
.ear2 {
  display: inline-block;
  color: var(--secondary);
  background-color: var(--main);
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top: 1px solid var(--main);
  border-left: 1px solid var(--main);
  border-right: 1px solid var(--main);
  width: 10%;
  height: 15px;
  top: -30px;
  left: 80%;
}
.caltop {
  background-image: linear-gradient(var(--main), var(--lightmain) 10%);
  border: 1px solid var(--main);
  height: 30px;
}
.weekend .caltop {
  background-image: linear-gradient(var(--main), var(--highlight) 10%);
}
.outside .caltop, .outside .ear1, .outside .ear2 {
  background-image: linear-gradient(var(--lightmain), var(--shadow) 10%);
}
.outside .daytop {
  background-color: #ddd;
}
.daytop {
  border-top: 3px solid var(--main);
  background-color: #fff;
  width: 100%;
}

.daytext {
  font-size: 20px;
  position: relative;
  display: inline-block;
  top: -25px;
  color: #000;
  z-index: 1;
}
.weekday {
  display: inline-block;
  bottom: 0px;
  font-size: 15px;
  text-decoration: overline;
  color: #000;
}
.weekend {
  color: #000;
}
.outside .daytext {
  color: var(--disabled);
}
.outside .weekend .weekday{
  color: var(--disabled);
}
.weekend .weekday {
  color: #000;
}
.addentry{
  display: flex;
  position: relative;
  background-color: var(--lightmain);
  border: 1px solid var(--highlight);
  color: var(--main);
  font-size: 25px;
  border-radius: 5px;
  margin-bottom: 0px;
  width: 100%;
  height: 30px;
  font-weight: bolder;
}
.addentry p {
  position: relative;

  top: -3px;
  width: 100%;

}
.addentry:hover {
  color: var(--secondary);
  box-shadow: inset -7px -7px 15px -10px var(--main);
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  #day .grid-container {
    margin-bottom: 30px;
  }
  .daytop {
    text-align: left;
    text-indent: 2px;
  }
  .outside {
    display: none;
  }
  .today {
    box-shadow: 0px 0px 20px 5px var(--highlight);
    z-index: 5;
  }
  .weekday {
    display: inline-block;
  }
  .today .weekday {
    font-size: 20px;
    color: #000;
  }

  .addentry p {
    top: -20px;
    font-size: 20px;
  }
}
@media screen and (min-width: 601px) {
  .addentry p {
    font-size: 10px;
  }
}
@media screen and (min-width: 1200px) {
  .weekday {
    display: inline-block;
  }
  .addentry p {
    font-size: 10px;
  }
}
</style>
