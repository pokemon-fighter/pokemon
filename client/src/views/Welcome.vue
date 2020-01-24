<template>
  <b-container fluid id="welcomePage">
      <b-row align-v="center" style="text-align: center;">
          <b-col cols="6" id="profCol">
              <img src="../../public/oak.png" alt="oak" id="prof">
          </b-col>
          <b-col cols="6" id="chatBox" v-if="!username" class="fade-in">
              <h1 id="chat1">Hello, my name is Professor Oak <br/> and you are?</h1>
              <input type="text" v-model="input">
              <b-button @click="nameInput">ok</b-button>
          </b-col>
          <b-col cols="6" id="chatBox2" v-if="username && !createRoomForm" >
              <h2 class="fade-in">Welcome {{username}}, to start please create a room or join one</h2>
              <br>
              <b-button @click="createRoomToggle" variant="outline-danger" class="mx-1 fade-in">
                  Create Room
              </b-button>
              <b-button variant="outline-danger" @click="joinRoom" class="mx-1 fade-in">
                  Join Room
              </b-button>
          </b-col>
          <b-col cols="6" id="CreateRoom" v-if="createRoomForm" >
              <h4 class="fade-in">Create Room</h4>
              <b-form>
                <b-form-group
                  id="roomNameLabel"
                  label="Room name:"
                  label-for="roomName"
                  v-if="form1"
                  class="fade-in"
                >
                <center>
                  <b-form-input
                    id="roomName"
                    v-model="form.roomName"
                    type="text"
                    required
                    placeholder="Enter Room Name"
                  ></b-form-input>
                  </center>
              </b-form-group>
              <b-form-group
                  id="roomCodeLabel"
                  label="Room code:"
                  label-for="roomCode"
                  v-if="next"
                  class="fade-in"
                >
                <center>
                  <b-form-input
                    id="roomCode"
                    v-model="form.roomCode"
                    type="text"
                    required
                    placeholder="Enter Room Code"
                  ></b-form-input>
                  </center>
              </b-form-group>
              </b-form>
              <b-button variant="success" v-if="form1" @click="nextCode" class="mx-1 fade-in">
                  Next
              </b-button>
              <b-button variant="success" v-if="next" @click="createRoom" class="mx-1 fade-in">
                  CreateRoom
              </b-button>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'WelcomePage',
  data() {
      return {
        username: '',
        input: '',
        createRoomForm: false,
        form: {
          roomName: '',
          roomCode: '',
        },
        form1: false,
        next: false
      }
  },
  created() {
      setTimeout(()=>{
        this.$store.commit('roomBGStart')
            }, 3000);
  },
  methods: {
      nameInput(){
          this.$store.commit('SetUsername', this.input)
          this.username = this.input
      },
      createRoomToggle(){
        this.form1 = true
        this.createRoomForm = true
      },
      nextCode(){
        this.form1 = false
        this.next = true
      },
      joinRoom(){
        this.$router.push({
          path: '/rooms'
        })
      },
      createRoom() {
        this.$store.dispatch('addRoom',{
          roomName:this.form.roomName,
          roomCode:this.form.roomCode
        })
      }
  }
}
</script>

<style>
#welcomePage {
    height: 100vh;
    background-image: url('../../public/room.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
#profCol {
    height: 100vh;
    padding-top: 10%;
}
#prof {
    height: 75vh;
}
#chatBox {
    height: 50vh;
    background-image: url('../../public/chatBubble.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 2%;
}

#chatBox2 {
    height: 50vh;
    background-image: url('../../public/chatBubble.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
}
#CreateRoom {
    height: 50vh;
    background-image: url('../../public/chatBubble.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding: 2% 2% 2% 2%;
}
#roomName {
  width: 50%;
}
#roomCode {
  width: 50%;
}
.fade-in {
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;
}

@keyframes fadeIn{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}
</style>