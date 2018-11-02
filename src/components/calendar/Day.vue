<template lang="html">
  <div class="card daycard" :class="[{outside: month != refMonth}, {today: datesEqual}]">
    <div class="cardimg daytop">
      <div class="daytext" :class="{weekend: isWeekend}"><strong> {{ day }}</strong><div class="weekday">{{ daysOfWeek[weekDay] }}</div></div>
      <div class="addentry">
        <p><strong> +</strong></p>
      </div>
    </div>
    <div class="user">
      <ul class="userlist">
        <li>
          <div class="round">
            <p>SU</p>
          </div>
          <div class="longuser" v-if="windowWidth > 1200">
            some user
          </div>
        </li>
        <li>
          <div class="round">
            <p>SO</p>
          </div>
          <div class="longuser" v-if="windowWidth > 1200">
            some other user
          </div>
        </li>
      </ul>
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
.round {
  position: relative;
  left: -10px;
  height: 25px;
  width: 25px;
  background-color: var(--main-color);
  border-radius: 50%;
  display: inline-block;
  top: -5px;
  float: left;
}
.longuser {
  display: inline-block;
  text-align: left;
}
.round p {
  position: absolute;
  text-align: center;
  top: -6px;
  left: 4px;
  color: #eee;
}
.today {
  color: var(--middle-color);
  border: 5px solid var(--middle-color);
}
.today .weekday {
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
.outside .daytop {
  background-color: #ddd;
}
.outside .user {
  box-shadow: 0 0 0 0;
  border: 0;
  display: block;
  float: left;
  background-color: #aaa;
}
.daycard {
  height: auto;
  display: inline-block;
  border-radius: 5px;
  background-color: var(--bottom-color);
}
.daytop {
  height: 70px;
  background-color: #fff;
}
.daytext {
  font-size: 25px;
  position: relative;
  display: inline-block;
  float: right;
  right: 3px;
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
  display: block;
  position: relative;
  background-color: #fff;
  border: 1px dotted var(--shadow-color);
  color: var(--main-color);
  font-size: 40px;
  border-radius: 5px;
  margin-bottom: 0px;
  text-align: right;
  top: 15px;
  width: 40px;
  height: 30px;
}
.addentry p {
  text-align: center;
  position: absolute;
  top: -45px;
  left: 8px;
}
.addentry:hover {
  color: var(--secondary-color);
  box-shadow: inset -7px -7px 15px -10px var(--main-color);
  cursor: pointer;
}
.user {
  font-size: 12px;
  border-top: 2px solid var(--shadow-color);

}
.userlist {
  list-style-type: none;
  padding: 5px;
  overflow: none;
}

.userlist li {
  position: relative;
  display: block;
  float: left;
  color: #444;
}
@media screen and (max-width: 320px) {
  .daycard {
    width: 40px;
    font-size: 10px;
  }
  .weekday {
    display: block;
    bottom: 0px;
  }
  .addentry {
    top: 15px;
    left: 5px;
    width: 30px;
    height: 30px;
    color: #eee;
  }
  .daytext {
    text-shadow: 0 0 0;
  }
  .outside .daytext {
    text-shadow: 0 0 0;
  }
}
@media screen and (max-width: 500px) {
  .addentry {
    display: none;
  }
}
@media screen and (min-width: 900px) {
  .daycard {
    width: 110px;
    font-size: 15px;
    left: 0px;
  }
  .weekday {
    display: inline-block;
  }
  .addentry {
    left: -3px;
    top: -3px;
    width: 40px;
    height: 40px;
    box-shadow: inset -11px -11px 2px -10px #222;
  }
}
@media screen and (min-width: 1200px) {
  .daycard {
    width: 150px;
    font-size: 15px;
    left: 0px;
  }
  .weekday {
    display: inline-block;
  }
  .addentry {
    left: -3px;
    top: -3px;
    width: 40px;
    height: 40px;
    box-shadow: inset -11px -11px 2px -10px #222;
  }
}
</style>
