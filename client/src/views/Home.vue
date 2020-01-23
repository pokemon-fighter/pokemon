<template>
  <b-row align-v="center" align-h="center" class="home">
    <b-button variant="light" id="startButton"><img src="../../public/startButton.png"></b-button>
  </b-row>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style scoped>
.home {
  background-image: url('../../public/landing.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
#startButton {
  margin-top: 7%;
  border-radius: 50%;
  height: 30vh;
  width: 17vw;
}
#startButton img {
  height: 30vh;
  width: 15vw;
  object-fit: contain;
}
</style>
