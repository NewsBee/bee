<template>
  <div>
    <Navbar />
    <h2 style="text-align: center">Data Mahasiswa</h2>
    <CthTable />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CthTable from "../components/TableMahasiswa.vue";
//import TableMahasiswa from '@/components/TableMahasiswa.vue';
export default {
  name: "MainMahasiswa",
  components: { Navbar, CthTable },
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