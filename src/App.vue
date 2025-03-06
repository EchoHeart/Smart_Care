<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    let nurseData = require('../src/dataset/nurse.json')
    let patientData = require('../src/dataset/patient.json')
    let orderData = require('../src/dataset/order.json')
    this.$store.state.nurseData = nurseData
    this.$store.state.patientData = patientData
    this.$store.state.orderData = orderData
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
