<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import db from '../firebase'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['getRooms', 'getData'])
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('getPokemons')
    this.getRooms()
    this.getData()
  }
}
</script>

<style></style>
