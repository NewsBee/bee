<template>
  <div>
  <Navbar />
  <div class="container">
  <h2>Saya Dzaki Zuhditiya</h2>
  </div>
  </div>
</template>




<script>
import Navbar from '@/components/Navbar.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "tentang",
    data() {
        return {
          nama : "",
        };
    },
    components: { Navbar }
};
</script>

<style>
</style>