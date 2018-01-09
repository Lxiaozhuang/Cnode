<template>
  <div id="app">
    <main-header></main-header>
    <!-- <topic-nav></topic-nav> -->
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from './components/main-header'
import mainFooter from './components/main-footer'
import topicNav from './components/topic/topic-nav'

export default {
  name:'app',
  components: {
    mainHeader,
    mainFooter,
    topicNav
  }
}
</script>

<style>

</style>
