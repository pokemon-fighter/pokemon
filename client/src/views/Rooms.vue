<template>
  <div>
    <b-container fluid class="rooms">
        <form class="text-center">
            <input class="mr-1" v-model="roomName" type="text" placeholder="Input room name">
            <input class="ml-1 mr-1" v-model="roomCode" type="text" placeholder="Input room code(number)">
            <b-button variant="primary" @click.prevent="addNewRoom">Submit</b-button>
        </form>
        <b-card-group columns class="mt-5 flex">
            <div v-for="room in rooms" :key="room.id">
              <roomCard :room="room"></roomCard>
            </div>
        </b-card-group>
    </b-container>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import roomCard from '@/components/roomCard.vue'

export default {
  components: {
    roomCard
  },
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
  }
}
</script>

<style scoped>
    .rooms {
        background-image: url('../../public/room.jpg');
        height: 98vh;
    }
</style>