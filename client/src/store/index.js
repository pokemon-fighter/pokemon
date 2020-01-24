import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonData: [],
    roomBG: new Audio(require('../../public/sounds/pokemonCenter.mp3')),
    homeBG: new Audio(require('../../public/sounds/pokemonstart.mp3')),
    battleBG: new Audio(require('../../public/sounds/battleTheme.mp3'))
  },
  mutations: {
    pokemonPass(state, payload){
      state.pokemonData = payload
      // console.log(state.pokemonData)
    },
    homeBGStart(state){
      state.homeBG.play()
    },
    roomBGStart(state){
      state.roomBG.play()
    },
    battleBGStart(state){
      state.battleBG.play()
    },
    roomBGStop(state){
      state.roomBG.pause()
    }
  },
  actions: {
    getPokemons({ commit }){
      let pokemons=[]
      db.collection('pokemons').get()
      .then(doc=>{
        doc.forEach(data=>{
          // console.log(data.data())
          pokemons.push(data.data())
        })
      })
      // console.log(pokemons)
      commit('pokemonPass', pokemons)
    }
  },
  modules: {
  }
})
