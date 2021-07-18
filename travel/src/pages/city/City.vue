<template>
  <div>
    <CityHeader/>
    <CitySearch/>
  </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
<style lang="stylus" scoped>

</style>
