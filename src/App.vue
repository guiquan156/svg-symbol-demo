<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Icon icon="dollar"/>
    <Icon icon="check-circle"/>
    <img alt="Vue logo" src="./assets/dollar.svg">
  </div>
</template>

<script>
import Icon from './components/icon';

export default {
  name: 'app',
  components: {
    Icon
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
