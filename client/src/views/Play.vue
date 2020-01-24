<template>
  <div>
    <img
      class="gambarNya"
      @click="dapetData"
      src="https://cdn.pixabay.com/photo/2014/12/22/00/03/rock-576667_960_720.png"
      alt=""
    />
    <img
      class="gambarNya"
      @click.prevent="attack"
      src="https://i.ya-webdesign.com/images/scissors-clipart-svg-1.png"
      alt=""
      srcset=""
    />
    <!-- <img
      class="gambarNya"
      src="https://img.freepik.com/free-photo/white-paper-crumpled-background_1232-2082.jpg?size=626&ext=jpg"
      alt=""
      srcset=""
    /> -->
    <div>{{ player1 }}</div>
    <div>{{ player2 }}</div>
    <div>{{ allHero }}</div>
    <div>{{ player1Hero }}</div>
    <div>{{ player2Hero }}</div>
  </div>
</template>

<script>
import db from '../../firebase'
export default {
  data() {
    return {
      role: 'player1',
      player1Hero: null,
      player2Hero: null
    }
  },
  methods: {
    dapetData() {
      this.player1Hero = this.allHero.find(
        item => item.name === this.player1.hero
      )

      this.player2Hero = this.allHero.find(
        item => item.name === this.player2.hero
      )
    },
    attack() {
      if (this.role === 'player1') {
        let attackValue =
          (this.player1Hero.attack / 100) * 5 * this.player1.damage
        let defenseValue = ((100 - this.player2Hero.defense) / 100) * 5
        this.player2.darah = this.player2.darah - attackValue - defenseValue
        // console.log(this.player2.darah)
        // console.log(this.player1Hero, this.player2Hero)

        db.collection('rooms')
          .doc('V7klZQTu85ksbo2eHxZn')
          .update({
            player2: {
              ...this.player2
            }
          })
      } else if (this.role === 'player2') {
        let attackValue =
          (this.player2Hero.attack / 100) * 5 * this.player2.damage
        let defenseValue = ((100 - this.player1Hero.defense) / 100) * 5
        this.player1.darah = this.player1.darah - attackValue - defenseValue
        // console.log(this.player2.darah)
        // console.log(this.player2Hero, this.player2Hero)

        db.collection('rooms')
          .doc('V7klZQTu85ksbo2eHxZn')
          .update({
            player1: {
              ...this.player1
            }
          })
      }
    }
  },
  computed: {
    matchStatus() {
      return this.$store.state.matchStatus
    },
    player2() {
      return this.$store.state.player2
    },
    player1() {
      return this.$store.state.player1
    },
    allHero() {
      return this.$store.state.heroes
    }
  },
  created() {},
  watch: {
    player2: function(newValue, oldValue) {
      // console.log(newValue.darah)
      if (newValue.darah <= 0) {
        db.collection('rooms')
          .doc('V7klZQTu85ksbo2eHxZn')
          .update({
            player2: {
              damage: 1,
              hero: this.$store.state.player2.hero,
              username: this.$store.state.player2.username,
              darah: 100
            },
            matchStatus: {
              player1: false,
              player2: false,
              player1Point: this.matchStatus.player1Point,
              player2Point: this.matchStatus.player2Point + 1,
              round: this.matchStatus.round + 1
            }
          })
      }
    },
    player1: function(newValue, oldValue) {
      // console.log(newValue.darah)
      if (newValue.darah <= 0) {
        db.collection('rooms')
          .doc('V7klZQTu85ksbo2eHxZn')
          .update({
            player1: {
              damage: 1,
              hero: this.$store.state.player1.hero,
              username: this.$store.state.player1.username,
              darah: 100
            },
            matchStatus: {
              player1: false,
              player2: false,
              player1Point: this.matchStatus.player1Point + 1,
              player2Point: this.matchStatus.player2Point,
              round: this.matchStatus.round + 1
            }
          })
      }
    },
    matchStatus() {}
  }
}
</script>

<style scoped>
.sample {
  color: white;
  bottom: 10px;
  position: absolute;
}
ul#gambar li {
  display: inline;
  /* margin-left: 3vh; */
  bottom: 10px;
}

.gambarNya {
  width: 100px;
  cursor: pointer;
}

.gambarNya:hover {
  transform: scale(1.1);
}

.warna {
  color: aliceblue;
}
</style>
