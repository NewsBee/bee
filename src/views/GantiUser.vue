<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div>
    <Navbar />
    <TableUser msg="Ganti"/>
  </div>
</template>

<script>
//import CthTable from "../components/TableMahasiswa.vue";
import Navbar from "../components/Navbar.vue";
import TableUser from "@/components/TableUser.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "GantiUser",
  components: { Navbar,TableUser },
};
</script>

<style>
</style>