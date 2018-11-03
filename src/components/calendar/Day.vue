<template lang="html">
  <div id="day" :class="{outside: month != refMonth}">
    <div class="grid-container" :class="{today: datesEqual}">
      <div class="card caltop">
        <div class="ear1">.</div><div class="ear2">.</div>
      </div>
      <div class="card whole">
        <div class="cardtop">
          <div class="daytop">
            <div class="daytext" :class="{weekend: isWeekend}"><strong> {{ day }}</strong><div class="weekday">{{ daysOfWeek[weekDay] }}</div></div>

          </div>
          <div class="addentry">
            <strong>+</strong>
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
  grid-gap: 10px;
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
  background-color: var(--main-color);
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
  color: var(--middle-color);
  box-shadow: 0px 0px 20px 7px var(--accent-color);
  font-weight: bolder;
  z-index: 5;
}
.today .weekday {
  font-size: 20px;
  color: var(--middle-color);
}
.weekend .weekday {
  color: var(--accent-color);
}
.outside {
  color: var(--disabled-color);
}
.outside .weekday {
  color: var(--disabled-color);
  text-shadow: 0 0 0;
}
.ear1 {
  display: inline-block;
  color: var(--secondary-color);
  background-color: var(--main-color);
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 10%;
  height: 15px;
  top: -15px;
  left: 10%;
}
.today .ear1, .today .ear2 {
  background-color: var(--accent-color);
}
.ear2 {
  display: inline-block;
  color: var(--secondary-color);
  background-color: var(--main-color);
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 10%;
  height: 15px;
  top: -30px;
  left: 80%;
}
.caltop {
  background-color: var(--main-color);
  height: 30px;
}
.today .caltop {
  background-color: var(--accent-color);
}
.outside .daytop {
  background-color: #ddd;
}
.outside .cardbot {
  box-shadow: 0 0 0 0;
  border: 0;
  background-color: #aaa;
}
.daytop {
  border-top: 3px solid var(--bottom-color);
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
  color: var(--main-color);
}
.weekend {
  color: var(--accent-color);
}
.addentry{
  display: flex;
  align-self: flex-end;
  position: relative;
  background-color: #fff;
  border: 1px dotted var(--shadow-color);
  color: var(--main-color);
  font-size: 25px;
  border-radius: 5px;
  margin-bottom: 0px;
  text-align: center;
  width: 100%;
  height: 30px;
}
.addentry:hover {
  color: var(--secondary-color);
  box-shadow: inset -7px -7px 15px -10px var(--main-color);
  cursor: pointer;
}
.users {
  font-size: 12px;
  box-shadow: inset 0px 5px 15px -10px var(--accent-color);
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
@media screen and (max-width: 340px) {
  .weekday {
    display: block;
    bottom: 0px;
    font-size: 10px;
  }
  .daytext {
    text-shadow: 0 0 0;
    font-size: 20px;
  }
  .outside .daytext {
    text-shadow: 0 0 0;
  }
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
    color: var(--shadow-color);
    box-shadow: 0px 0px 20px 2px var(--accent-color);
    z-index: 5;
  }
  .weekday {
    display: inline-block;
  }
  .today .weekday {
    font-size: 20px;
    color: var(--shadow-color);
  }
  .today .daytop {
    background-color: var(--main-color);
  }
  .today .cardbot {
    background-color: var(--shadow-color);
  }

}
@media screen and (min-width: 1200px) {
  .weekday {
    display: inline-block;
  }
}
</style>
