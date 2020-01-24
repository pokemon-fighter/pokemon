import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../firebase'
import router from '../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null,
    player1Name: 'Richard',
    player2Name: 'Khonan',
    roomCode: '',
    roomName: '',
    playerRole: '',
  },
  mutations: {
    SET_ROOMS( state,payload ) {
      state.rooms = payload
    },
    SET_ROOM_CODE( state,payload ) {
      state.roomCode = payload
    },
    SET_ROOM_NAME( state,payload ) {
      state.roomName = payload
    },
    SET_PLAYER_ROLE( state,payload ) {
      state.playerRole = payload
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
          return db.collection('rooms').doc(room.id).set({
            player1: {username:state.player1Name}
          },{ merge:true })
        })
        .then( result => {
          console.log('ADDED PLAYER 1')
          commit('SET_ROOM_CODE',payload.roomCode)
          commit('SET_ROOM_NAME',payload.roomName)
          commit('SET_PLAYER_ROLE','Player 1')
          router.push({path:'/wait'})
        })
        .catch( error => {
          console.log('Error adding document: ',error)
        })
    },
    joinRoom({commit,state},payload) {
      console.log(payload, "INI PAYLOAD")
      db.collection('rooms').doc(payload.id)
        .get()
        .then( doc => {
          console.log(doc.data().roomCode,"INI DOC")
          if(doc.data().roomCode === payload.roomCode) {
            return db.collection("rooms").doc(payload.id).set({
              player2: {username:state.player2Name}
            },{merge:true})
          } else {
            throw {Error:'Wrong room code'}
          }
        })
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
