<template>
  <div class="row">
    <div class="col">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
          <h2>
            <strong>Selamat datang , </strong><br />
            {{nme}}
          </h2>
          <p>Klik tombol jika ingin <br/>melihat/mengedit data mahasiswa</p>
              <router-link class="btn btn-lg btn-success" variant="info" to="/MainMahasiswa">
                <b-icon-arrow-right></b-icon-arrow-right>Mahasiswa
              </router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <img src="../assets/ilustrasi.png" alt="ilustrasi" width="100%" />
    </div>
  </div>

  
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "hero",
  props : {
    nme: String,
  }
};
</script>

<style>
</style>