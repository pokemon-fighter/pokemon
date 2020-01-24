<template>
  <b-col class="pokemonCard mx-2 my-2">
    <img v-b-popover.hover.v-primary="`attack: ${pokeData.atk}\ndefense: ${pokeData.def}`" :title="pokeData.name" :src="pokeData.selectImg">
    <b-button>I Choose You!</b-button>
  </b-col>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: ['pokeData'],
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
    .pokemonCard {
        border-radius: 15px;
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
        height: 30vh;
        width: 20vw;
        background-image: url('../../public/ballbg.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .pokemonCard:hover {
        transform: scale(1.05);
        transition: 1s;
    }
    .pokemonCard img {
        height: 80%;
        width: 100%;
        object-fit: contain;
        z-index: 0;
    }
</style>