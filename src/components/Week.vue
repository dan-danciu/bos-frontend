<template lang="html">
  <div class="grid-container">
    <day :date="week[0]" :refMonth="refMonth"/>
    <day :date="week[1]" :refMonth="refMonth"/>
    <day :date="week[2]" :refMonth="refMonth"/>
    <day :date="week[3]" :refMonth="refMonth"/>
    <day :date="week[4]" :refMonth="refMonth"/>
    <day :date="week[5]" :refMonth="refMonth"/>
    <day :date="week[6]" :refMonth="refMonth" class="day7"/>
  </div>
</template>

<script>
export default {
  components: {
    Day: () => import("./Day.vue")
  },
  props: {
    week: Array,
    refMonth: Number
  }
}
</script>

<style lang="css">
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 5px;
  padding: 5px;
}
.day7 {
  grid-column: 7;
}
@media screen and (max-width: 600px) {
  .grid-container {
    grid-gap: 0px;
    padding: 0px;
    padding-top: 5px;
  }
}
@media screen and (min-width: 601px, max-width: 960px) {
  .grid-container {
    grid-gap: 0px;
    padding: 3px;
    padding-top: 5px;
  }
}
</style>
