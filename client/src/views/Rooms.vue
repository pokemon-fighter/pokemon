<template>
  <div class="rooms">
    <div v-for="room in rooms" :key="room.id">
        <h1>{{room.roomName}}</h1>
    </div>
    <form @submit.prevent="addRoom">
      <input v-model="roomName" type="text" placeholder="Input room name">
      <input v-model="roomCode" type="number" placeholder="0">
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>
import db from '../../firebase'

export default {
  data() {
    return {
      roomName: '',
      roomCode: null,
      rooms: []
    }
  },
  created() {
    db.collection('rooms').onSnapshot(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        console.log(doc.data(), doc.id)
        this.rooms.push({
            id:doc.id,
            ...doc.data()
        })
      })
    })
  },
  methods: {
    addRoom() {
      db.collection("rooms").add({
        roomName: this.roomName,
        roomCode: this.roomCode,
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
      this.roomName = '',
      this.roomCode = ''
    }
  }
}
</script>

<style>

</style>