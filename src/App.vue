<template>
  <div id="app">
    <MainHeader/>
    <TopicList/>
  </div>
</template>

<script>
import MainHeader from './components/main-header'
import TopicList from './components/topic/topic-list'

export default {
  name: 'app',
  components: {
    MainHeader,
    TopicList
  }
}
</script>

<style>

</style>
