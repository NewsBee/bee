<template>
  <div class="home">
    <Navbar />
    <div class="container">
    <hero :nme="this.nama" />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";
import hero from "../components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  data: () => ({
    nama: JSON.parse(localStorage.getItem("user-info")).username,
  }),
  components: {
    Navbar,
    hero,
    Footer,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    //this.nama = JSON.parse(user).username;
    if (!user) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style>
.home {
  height: 100vh;
  background-color: antiquewhite;
}
</style>