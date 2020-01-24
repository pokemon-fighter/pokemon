<template>
  <b-row align-v="center" align-h="center" class="home">
    <router-link to="/Welcome"><b-button variant="light" @click="startClicked" id="startButton"><img src="../../public/startButton.png"></b-button></router-link>
  </b-row>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  methods: {
    startClicked(){
      this.$store.commit('homeBGStart')
    }
  }
}
</script>

<style scoped>
.home {
  background-image: url('../../public/landing.jpg');
  background-size: cover;
  background-position-y: 45%;
  background-repeat: no-repeat;
  height: 100vh;
}
#startButton {
  border-radius: 50%;
  height: 35vh;
  width: 20vw;
}
#startButton:hover {
  background-color: rgb(253, 86, 86);
}
#startButton img {
  height: 30vh;
  width: 15vw;
  object-fit: contain;
}
</style>
