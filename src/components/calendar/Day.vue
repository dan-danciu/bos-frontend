<template lang="html">
  <div id="day" :class="{outside: month != refMonth}">
    <div class="grid-container" :class="{today: datesEqual}">
      <div class="card caltop">
        <div class="ear1">'</div><div class="ear2">'</div>
      </div>
      <div class="card whole">
        <div class="cardtop">
          <div class="daytop">
            <div class="daytext" :class="{weekend: isWeekend}"><strong> {{ day }}</strong><div class="weekday">{{ daysOfWeek[weekDay] }}</div></div>

          </div>
          <div class="addentry">
            <p>Add entry</p> +
          </div>
          <div class="cardbot users">
            <ul class="userlist">
              <li>
                <div class="round">
                  SU
                </div>
                <div class="longuser">some user</div>
              </li>
              <li>
                <div class="round">
                  SO
                </div>
                <div class="longuser">some other user</div>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
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
      month: 0
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
    }
  },
  methods: {
    setUp() {
      this.weekDay = this.date.getDay();
      this.day = this.date.getDate();
      this.month = this.date.getMonth();
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
#day .cardbot {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
.longuser {
  display: inline-block;
  text-align: left;
}
.today {
  color: var(--accent);
  box-shadow: 0px 0px 20px 7px var(--accent);
  font-weight: bolder;
  z-index: 5;
  background-image: linear-gradient(var(--accent), var(--main) 55%);
}
.today .weekday {
  font-size: 20px;
  color: var(--accent);
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
  background-color: var(--accent);
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
  background-image: linear-gradient(var(--main), var(--secondary) 55%);
  border: 1px solid var(--main);
  height: 30px;
}
.today .caltop {
  background-image: linear-gradient(var(--accent), var(--main));
}
.outside .caltop, .outside .ear1, .outside .ear2 {
  background-image: linear-gradient(var(--lightmain), var(--shadow) 55%);
}
.outside .daytop {
  background-color: #ddd;
}
.outside .cardbot {
  box-shadow: 0 0 0 0;
  border: 0;
  background-color: var(--disabled);
}
.daytop {
  border-top: 3px solid var(--main);
  background-color: #fff;
  width: 100%;
}
.daytext {
  font-size: 25px;
  position: relative;
  display: inline-block;
  float: right;
  z-index: 1;
}
.weekday {
  display: block;
  bottom: 0px;
  font-size: 15px;
  text-decoration: overline;
  color: var(--secondary);
}
.weekend {
  color: var(--main);
}
.weekend .weekday {
  color: var(--main);
}
.addentry{
  display: flex;
  position: relative;
  background-color: var(--lightmain);
  border: 1px dotted var(--highlight);
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
.users {
  font-size: 12px;
  box-shadow: inset 0px 5px 15px -10px var(--accent);
}
.userlist {
  list-style-type: none;
  padding: 10px;
  text-align: left;
  overflow: none;
}

.userlist li {
  position: relative;
  display: block;
  color: #444;
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
    color: var(--highlight);
    box-shadow: 0px 0px 20px 2px var(--accent);
    z-index: 5;
  }
  .weekday {
    display: inline-block;
  }
  .today .weekday {
    font-size: 20px;
    color: var(--highlight);
  }
  .today .daytop {
    background-color: var(--main);
  }
  .today .cardbot {
    background-color: var(--highlight);
  }
  .addentry p {
    top: -5px;
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
