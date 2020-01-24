<template>
  <div id="app">
<<<<<<< HEAD
=======
    <!-- <router-link to="/">Home</router-link> | -->
>>>>>>> c7df00112b8d6ffa55fbb20aea03623028687b6e
    <router-view />
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(['getData'])
  },
  created() {
>>>>>>> c7df00112b8d6ffa55fbb20aea03623028687b6e
    this.getData()
  }
}
</script>

<<<<<<< HEAD
<style></style>
=======
<style>
body {
  /* background-image: url('http://xdesktopwallpapers.com/wp-content/uploads/2012/04/Cool%20Vs%20Hot%20Fists%20On%20Black%20Background.jpg'); */
  /* background: grey; */
}
</style>
>>>>>>> c7df00112b8d6ffa55fbb20aea03623028687b6e
