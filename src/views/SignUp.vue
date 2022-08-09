<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div>
    <nav class="lginrg">
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Daftar</router-link>
    </nav>
    <halam pesan="SignUp" />
  </div>
</template>

<script>
import halam from "../components/login-register.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "signup",
  components: { halam },
};
</script>