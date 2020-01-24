<template>
  <div>
      <p>{{roomName}} - {{roomCode}}</p>
      <p>Waiting for opponent</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['roomName','roomCode'])
    }
}
</script>

<style>

</style>