<template>
  <b-container fluid id="battleArena">
      <b-row class="pt-5">
          <b-col>
              <b-progress :value="hp1" variant="success" striped :animated="animate" class="hpBar"></b-progress>
          </b-col>
          <b-col cols="2">
            <h3 style="color:white;font-family: 'Press Start 2P', cursive;">Round 1</h3>
          </b-col>
          <b-col>
              <b-progress :value="hp2" variant="success" striped :animated="animate" class="hpBar"></b-progress>
          </b-col>
          
      </b-row>
      <b-row align-h="center">
          <b-col class="pt-3">
          <b-row align-h="center" class="my-4">
              <b-button variant="primary" class="suitButton" @click="attackTest"><img class="suitImg" src="../../public/rock.png" alt="rock"></b-button>
          </b-row>
          <b-row align-h="center">
              <b-button class="mx-3 suitButton" variant="success"><img class="suitImg" src="../../public/paper.png" alt="rock"></b-button>
              <b-button class="mx-3 suitButton" variant="warning"><img class="suitImg" src="../../public/scissors.png" alt="rock"></b-button>
          </b-row>
          </b-col>
      </b-row>
      <b-row class="pokemonPlacement">
          <b-col id="Sprite1">
              <img src="../../public/sprites/chikorita.gif" alt="plyr1" class="pokemonChar mx-2">
          </b-col>
          <b-col v-if="fire">
              <img id="attack1" src="../../public/fireAttack.png" alt="plyr1">
          </b-col>
          <b-col id="Sprite2">
              <img src="../../public/sprites/pikachu.gif" alt="plyr1" class="pokemonChar mx-2">
          </b-col>
      </b-row>
      <b-row align-h="between" style="color:white;font-family: 'Press Start 2P', cursive;">
          <b-col cols='2' class="roundsWon">
              <h3>wins: 1</h3>
          </b-col>
          <b-col cols='2' class="roundsWon">
              <h3>wins: 1</h3>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
    name: 'Battle',
    data() {
      return {
        animate: true,
        hp1: 100,
        hp2: 100,
        fire: false,
        plyr1Win: false,
        plyr2Win: false
      }
    },
    methods: {
        attackTest(){
            if(this.fire){
                this.fire = false
            }else{
                this.fire = true
            }
        }
    },
    created() {
        this.$store.commit('roomBGStop')
        this.$store.commit('battleBGStart')
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
 #battleArena {
     background-image: url('../../public/stadium.png');
     background-size: cover;
     background-repeat: no-repeat;
     height: 100vh;
 }
 .suitButton {
     border-radius: 50%!important;
 }
 .suitImg {
     height: 8vh;
     width: 4vw;
     object-fit: contain;
 }
 .hpBar {
     height: 4vh!important;
 }
 .pokemonPlacement {
     height: 50vh;
     padding: 5% 10% 0 10%;
 }
 #Sprite1 {
    transform: scaleX(-1);
 }
 #attack1 {
     width: 20vw;
 }
 .roundsWon {
     background-color: rgba(0, 0, 0, 0.75);
     border-radius: 5%;
 }
 .pokemonChar {
     height: 25vh;
 }
</style>