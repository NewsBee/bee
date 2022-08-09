<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div>
    <Navbar />
    <h2 style="text-align:center">Ganti/Update Mahasiswa</h2>
    <CthTable msg="Ganti" />
  </div>
</template>

<script>
import CthTable from "../components/TableMahasiswa.vue";
import Navbar from "../components/Navbar.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Ganti",
  components: { Navbar, CthTable },
};
</script>

<style>
</style>