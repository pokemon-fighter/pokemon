<template>
  <div>
      <p>{{roomName}} - {{roomCode}}</p>
      <p>Waiting for opponent</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import db from "../../firebase.js"

export default {
    computed: {
        ...mapState(['roomName','roomCode','roomId','opponentRole'])
    },
    created() {
        db.collection('rooms').doc(this.roomId).onSnapshot(doc => {
            if(doc.data().connection_state[this.opponentRole]) {
                this.$route.push({path: '/play'})
            }
          
        })
    }
}
</script>

<style>

</style>