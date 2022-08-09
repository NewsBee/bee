<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Navbar />
    <h2 style="text-align: center">Ganti/Update data</h2>
    <hr />
    <div style="text-align: center">
      <button class="btn" @click="$router.push('../AdminMenu')">
        Data user
      </button>
      <button class="btn" @click="$router.push('../TambahUser')">
        Tambah data
      </button>
    </div>
    <hr />
    <div class="sig">
      <div class="daftar">
        <input type="text" placeholder="Enter username" v-model="username" />
        <input type="password" placeholder="Enter password" v-model="password" />

        <b-button
          variant="outline-info"
          style="width: 300px"
          v-on:click="updateUser"
        >
          Update Data
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  // eslint-disable-next-line no-undef, vue/multi-word-component-names
  name: "userupd",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async updateUser() {
      //console.log(this.nama);
      var mahasiswa = {
        username: this.username,
        password: this.password,
      };
      await axios
        .put(
          "https://62e8fab8249bb1284eb7bd0d.mockapi.io/idpass/"+this.$route.params.id,
          mahasiswa
        )
        .then((response) => {
          //console.log(response);
          this.username = "";
          this.password = "";
          if (response.status == 200) {
            alert("Berhasil update data user");
            //localStorage.setItem("user-info", JSON.stringify(response.data));
          }
        });
    },
  },
  components: { Navbar },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    const result = await axios.get('https://62e8fab8249bb1284eb7bd0d.mockapi.io/idpass/'+this.$route.params.id);
    console.warn(result.data);
    this.username = result.data.username;
    this.password = result.data.password;
  },
};
</script>

<style>
</style>