<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(['getData'])
  },
  created() {
    this.getData()
  }
}
</script>

<style>
body {
  /* background-image: url('http://xdesktopwallpapers.com/wp-content/uploads/2012/04/Cool%20Vs%20Hot%20Fists%20On%20Black%20Background.jpg'); */
  /* background: grey; */
}
</style>
