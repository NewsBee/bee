<template>
  <div>
    <Navbar />
    <h2 style="text-align: center">Data User</h2>
    <TableUser />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
//import CthTable from "../components/TableMahasiswa.vue";
import TableUser from "@/components/TableUser.vue";
//import TableMahasiswa from '@/components/TableMahasiswa.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Admin",
  components: { Navbar, TableUser },
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