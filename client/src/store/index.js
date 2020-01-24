import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import db from '../../firebase'

export default new Vuex.Store({
  state: {
    player1: null,
    player2: null,
    matchStatus: null,
    heroes: [
      {
        name: 'pokemon',
        attack: 75,
        defense: 25
      },
      {
        name: 'heroLain',
        attack: 25,
        defense: 75
      }
    ]
  },
  mutations: {
    setPlayer1(state, payload) {
      state.player1 = payload
    },
    setPlayer2(state, payload) {
      state.player2 = payload
    },
    setMatchStatus(state, payload) {
      state.matchStatus = payload
    }
  },
  actions: {
    getData({ commit }) {
      db.collection('rooms')
        .doc('V7klZQTu85ksbo2eHxZn')
        .onSnapshot(querySnapshot => {
          // console.log(querySnapshot.data().player1)
          commit('setPlayer1', querySnapshot.data().player1)
          commit('setPlayer2', querySnapshot.data().player2)
          commit('setMatchStatus', querySnapshot.data().matchStatus)
        })
    }
  },
  modules: {}
})
