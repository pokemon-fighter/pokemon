import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../firebase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null,
    player1Name: 'Richard',
    player2Name: 'Khonan',
    playerRole: '',
  },
  mutations: {
    SET_ROOMS( state,payload ) {
      state.rooms = payload
    }
  },
  actions: {
    getRooms({commit}) {
      db.collection('rooms').onSnapshot(querySnapshot => {
        let roomss = []  
        querySnapshot.docs.forEach(doc => {
          roomss.push({
              id:doc.id,
              ...doc.data()
          })
          // rooms = 
        })
        console.log(1, roomss)
        commit('SET_ROOMS',roomss)
      })
      // rooms=[]
    },
    addRoom({commit,state},payload) {
      // rooms = []
      console.log(payload,"ini payload")
      db.collection("rooms").add({
        roomName: payload.roomName,
        roomCode: payload.roomCode,
        matchStatus: {
          player1: false,
          player2: false,
          round: 5
        }
      })
        .then( room => {
          console.log(rooms,"ini room")
          return db.collection('rooms').doc(room.id).set({
            player1: {username:state.player1Name}
          },{ merge:true })
        })
        .then( result => {
          console.log('ADDED PLAYER 1')
        })
        .catch( error => {
          console.log('Error adding document: ',error)
        })
    },
    joinRoom({commit,state},payload) {
      console.log(payload, "INI PAYLOAD")
      db.collection("rooms").doc(payload).set({
        player2: {username:state.player2Name}
      },{ merge: true})
        .then( () => {
          console.log('ADDED PLAYER 2')
        })
        .catch( error => {
          console.log('Error adding player 2', error)
        })
    }
  },
  modules: {
  }
})
