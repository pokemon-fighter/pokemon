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
            console.log(doc.data())
            if(doc.data().connection_state[this.opponentRole]) {
                this.$router.push({path: '/CharacterSelect'})
            }
          
        })
    }
}
</script>

<style>

</style>