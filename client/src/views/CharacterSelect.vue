<template>
<b-container fluid id="selectBG">
  <b-container id="pokebox" style="text-align:center;">
      <div id="boxHeader">
      <h1>Choose Your Partner!</h1>
      </div>
      <b-row cols="4" align-h="center" id="startCard">
          <CharacterCard v-for="(pokemon, i) in $store.state.pokemonData" :key="i" :pokeData="pokemon"></CharacterCard>
      </b-row>
  </b-container>
  </b-container>
</template>

<script>
import CharacterCard from '../components/CharacterCard'
export default {
    name: 'CharacterSelect',
    data() {
        return {
            bgm: new Audio(require('../../public/sounds/pokemonCenter.mp3'))
        }
    },
    components: {
        CharacterCard
    },
    created() {
        this.bgm.play()
    }
}
</script>

<style scoped>
#selectBG {
    background-image: url('../../public/celectbg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
#pokebox {
    height: 100vh;
    padding-top: 4%;
    overflow: scroll;
    color: white;
}
#startCard {
    margin-top: 10%;
}
</style>