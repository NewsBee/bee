<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Navbar />
    <h2 style="text-align: center">Ganti/Update data</h2>
    <hr />
    <div style="text-align: center">
      <button class="btn" @click="$router.push('../MainMahasiswa')">
        Data Mahasiswa
      </button>
      <button class="btn" @click="$router.push('../TambahMahasiswa')">
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
          v-on:click="updateMhs"
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
  name: "halganti",
  data() {
    return {
      nama: "",
      nomor: "",
      alamat: "",
    };
  },
  methods: {
    async updateMhs() {
      //console.log(this.nama);
      var mahasiswa = {
        nama: this.nama,
        nomor: this.nomor,
        alamat: this.alamat,
      };
      await axios
        .put(
          "https://62e8fab8249bb1284eb7bd0d.mockapi.io/mahasiswa/"+this.$route.params.id,
          mahasiswa
        )
        .then((response) => {
          console.log(response);
          this.nama = "";
          this.nomor = "";
          this.alamat = "";
          if (response.status == 200) {
            alert("Berhasil update data mahasiswa");
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
    const result = await axios.get('https://62e8fab8249bb1284eb7bd0d.mockapi.io/mahasiswa/'+this.$route.params.id);
    console.warn(result.data);
    this.nama = result.data.nama;
    this.nomor = result.data.nomor;
    this.alamat = result.data.alamat;
  },
};
</script>

<style>
</style>