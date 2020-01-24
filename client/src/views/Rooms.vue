<template>
  <div>
    <b-container fluid class="rooms">
        <form class="text-center">
            <input class="mr-1" v-model="roomName" type="text" placeholder="Input room name">
            <input class="ml-1 mr-1" v-model="roomCode" type="number" placeholder="Input room code(number)">
            <b-button variant="primary" @click.prevent="addNewRoom">Submit</b-button>
        </form>
        <b-card-group columns class="mt-5 flex">
            <div v-for="room in rooms" :key="room.id">
                <b-card bg-variant="light" :header="room.roomName" class="text-center mt-3">
                    <b-card-text v-if="typeof room.player1 != 'undefined'">1. {{room.player1.username}}</b-card-text>
                    <b-card-text v-if="typeof room.player2 != 'undefined'">2. {{room.player2.username}}</b-card-text>
                    <b-button variant="primary" @click.prevent="joinThisRoom(room.id)">Join</b-button>
                </b-card>
            </div>
        </b-card-group>
    </b-container>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
  data() {
    return {
      roomName: '',
      roomCode: null,
    }
  },
  computed: {
      ...mapState(['rooms'])
  },
  methods: {
    ...mapActions(['addRoom','joinRoom']),
    addNewRoom() {
      this.addRoom({
        roomName: this.roomName,
        roomCode: this.roomCode
      })
      this.roomName = '',
      this.roomCode = ''
    },
    joinThisRoom(id) {
        this.joinRoom(id)
    }
  }
}
</script>

<style>
    .rooms {
        background-image: url('../../public/room.jpg');
        height: 98vh;
    }
</style>