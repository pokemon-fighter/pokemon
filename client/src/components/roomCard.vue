<template>
  <b-card bg-variant="light" :header="room.roomName" class="text-center mt-3">
        <b-card-text v-if="typeof room.player1 != 'undefined'">1. {{room.player1.username}}</b-card-text>
        <b-card-text v-if="typeof room.player2 != 'undefined'">2. {{room.player2.username}}</b-card-text>
        <b-form-input v-model="roomCode" placeholder="Input room code"></b-form-input>
        <b-button variant="primary" @click.prevent="joinThisRoom(room.id)">Join</b-button>
    </b-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['room'],
    data() {
        return {
            roomCode: ''
        }
    },
    methods: {
        ...mapActions(['joinRoom']),
        joinThisRoom(id){
            this.joinRoom({
                id:id,
                roomCode: this.roomCode
            })
        } 
    }
}
</script>

<style>

</style>