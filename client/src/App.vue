<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import db from '../firebase'

export default {
  data () {
    return {
      
    }
  },
  created() {
    db.collection('rooms').onSnapshot(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        console.log(doc.data(), doc.id)
      })
    })
    this.$store.dispatch('getPokemons')
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
