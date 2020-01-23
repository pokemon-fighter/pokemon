<template>
<b-container fluid id="selectBG">
  <b-container id="pokebox">
      <div id="boxHeader">
      <h1>Choose Your Partner!</h1>
      </div>
      <b-row cols="4" align-h="center" id="startCard">
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
          <CharacterCard></CharacterCard>
      </b-row>
  </b-container>
  </b-container>
</template>

<script>
import CharacterCard from '../components/CharacterCard'
export default {
    name: 'CharacterSelect',
    components: {
        CharacterCard
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