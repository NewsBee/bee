<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Navbar />
    <h2 style="text-align: center">Tambah user</h2>
    <hr />
    <div style="text-align: center">
      <button class="btn" @click="$router.push('AdminMenu')">
        Data Pengguna
      </button>
      <button class="btn" @click="$router.push('TambahUser')">
        Tambah data
      </button>
    </div>
    <hr />
    <div class="sig">
      <div class="daftar">
        <input type="text" placeholder="Enter name" v-model="nama" />
        <input type="text" placeholder="Enter number" v-model="nomor" />
        <input type="text" placeholder="Enter address" v-model="alamat" />

        <b-button
          variant="outline-info"
          style="width: 300px"
          v-on:click="tambahData"
        >
          Submit
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
  name: "tambahuser",
  data() {
    return {
      nama: "",
      nomor: "",
      alamat: "",
    };
  },
  methods: {
    async tambahData() {
      //console.log(this.nama);
      var mahasiswa ={
        nama : this.nama,
        nomor : this.nomor,
        alamat : this.alamat,
      };
      await axios
      .post("https://62e8fab8249bb1284eb7bd0d.mockapi.io/mahasiswa",mahasiswa)
              .then((response) => {
          console.log(response);
          this.nama = "";
          this.nomor = "";
          this.alamat = "";
          if (response.status == 201) {
            alert("Berhasil menambahkan mahasiswa");
            //localStorage.setItem("user-info", JSON.stringify(response.data));
          }
        });
    },
  },
  components: { Navbar },
    mounted() {
    let user = localStorage.getItem("user-info");
    
    if (!user) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style>
</style>