import Vue from 'vue'
import Vuex from 'vuex'
import db from '../../firebase'
import router from '../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: null,
    player1Name: '',
    player2Name: '',
    roomCode: '',
    roomName: '',
    playerRole: '',
    opponentRole: '',
    roomId: '',
    userName: '',
    pokemonData: [],
    roomBG: new Audio(require('../../public/sounds/pokemonCenter.mp3')),
    homeBG: new Audio(require('../../public/sounds/pokemonstart.mp3')),
    battleBG: new Audio(require('../../public/sounds/battleTheme.mp3'))
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
    },
    SET_OPPONENT_ROLE( state,payload ) {
      state.opponentRole = payload
    },
    SET_ROOM_ID( state,payload ) {
      state.roomId = payload
    },
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
    },
    SetUsername(state, payload) {
      state.userName = payload
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
          player1: "",
          player2: "",
          round: 5
        },
        connection_state: {
          player1: true,
          player2: false
        }
      })
        .then( room => {
          commit('SET_ROOM_ID',room.id);
          console.log(room)
          return db.collection('rooms').doc(room.id).set({
            player1: {username:state.userName}
          },{ merge:true })
        })
        .then( () => {
          console.log('ADDED PLAYER 1')
          commit('SET_ROOM_CODE',payload.roomCode)
          commit('SET_ROOM_NAME',payload.roomName)
          commit('SET_PLAYER_ROLE','player1')
          commit('SET_OPPONENT_ROLE','player2')

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
            commit('SET_ROOM_ID',payload.id);
            return db.collection("rooms").doc(payload.id).update({
              player2: {username:state.userName},
              "connection_state.player2": true
            })
          } else {
            throw {Error:'Wrong room code'}
          }
        })
        .then( () => {
          console.log('ADDED PLAYER 2')
          commit('SET_PLAYER_ROLE','player2')
          commit('SET_OPPONENT_ROLE','player1')
          router.push({path:'/wait'})
        })
        .catch( error => {
          console.log('Error adding player 2', error)
        })
    
  },
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
}
})
