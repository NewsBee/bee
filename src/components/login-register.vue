<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="sig">
    <div class="siga"></div>
    <img class="logo" src="https://untan.ac.id/wp-content/uploads/2022/06/logo-untan.png" alt="logos" />
    <h1 style="margin-top: 30px">{{ pesan }}</h1>
    <div class="daftar">
      <input
        type="text"
        v-if="pesan === 'Login'"
        v-model="username"
        placeholder="Enter name"
        v-on:keyup.enter="login"
      />
      <input
        type="text"
        v-if="pesan === 'SignUp'"
        v-model="username"
        placeholder="Enter name"
        v-on:keyup.enter="signUp"
      />
      <input
        type="password"
        v-if="pesan === 'Login'"
        v-model="password"
        placeholder="Enter password"
        v-on:keyup.enter="login"
      />
      <input
        type="password"
        v-if="pesan === 'SignUp'"
        v-model="password"
        placeholder="Enter password"
        v-on:keyup.enter="signUp"
      />
      <b-button
        v-if="pesan === 'Login'"
        v-on:click="login"
        variant="outline-info"
        style="width: 300px"
      >
        {{ pesan }}
      </b-button>
      <b-button
        v-if="pesan === 'SignUp'"
        v-on:click="signUp"
        variant="outline-info"
        style="width: 300px"
      >
        {{ pesan }}
      </b-button>
      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="info"
        @dismiss-count-down="countDownChanged"
        style="
        margin-top:10px;
        "
      >
        Username atau password yang anda masukkan salah...
      </b-alert>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//  import { response } from "express";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "halam",
  data: () => ({
    username: "",
    password: "",
    tampild : "",
    fl: false,
    dismissSecs: 5,
    dismissCountDown: 0,
  }),
  methods: {
    async signUp() {
      var akun = {
        username: this.username,
        password: this.password,
      };
      await axios
        .post("https://62e8fab8249bb1284eb7bd0d.mockapi.io/idpass", akun)
        .then((response) => {
          console.log(response);
          this.username = "";
          this.password = "";
          if (response.status == 201) {
            alert("Berhasil mendaftar");
            //localStorage.setItem("user-info", JSON.stringify(response.data));
          }
        });
    },
    async login() {
      let result = await axios.get(
        `https://62e8fab8249bb1284eb7bd0d.mockapi.io/idpass?username=${this.username}&password=${this.password}`
      );
      console.warn(result);
      if (result.status == 200 && result.data.length > 0) {
        this.tampild = this.username;
        //alert("Berhasil mendaftar");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomeView" });
      } else if (result.status == 200 && result.data.length <= 0) {
        this.showAlert();
      }
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
  },
  mounted() {
    let userinfo = localStorage.getItem("user-info");
    if (userinfo) {
      this.$router.push({ path: "/" });
    }
  },
  props: {
    pesan: String,
  },
};
</script>

<style>
.logo {
  widows: 100px;
  height: 100px;
}



.sig {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    margin-top: 100px;
}

.daftar input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
</style>