import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    SET_ROOMS( state,payload ) {
      state.rooms = payload
    }
  },
  actions: {
    getRooms({commit}) {
      let rooms = []
      db.collection('rooms').onSnapshot(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          rooms.push({
              id:doc.id,
              ...doc.data()
          })
        })
      })
      commit('SET_ROOMS',rooms)
    },
    addRoom({commit},payload) {
      db.collection("rooms").add({
        roomName: payload.roomName,
        roomCode: payload.roomCode,
        player1: {},
        player2: {},
        matchStatus: {
          player1: false,
          player2: false,
          round: 5
        }
      })
        .then( room => {
          console.log(room, ' ROOM ADDED')
        })
        .catch( error => {
          console.log('Error adding document: ',error)
        })
    }
  },
  modules: {
  }
})
