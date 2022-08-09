<template>
  <div class="table">
    <hr />
    <div style="text-align: center">
      <button class="btn" @click="visible = !visible" v-if="msg != 'Ganti'">
        Show/Hide data
      </button>
      <button
        class="btn"
        @click="$router.push('MainMahasiswa')"
        v-if="msg == 'Ganti'"
      >
        Data Mahasiswa
      </button>
      <button class="btn" @click="$router.push('TambahMahasiswa')">
        Tambah data
      </button>
      <button class="btn" @click="$router.push('GantiMahasiswa')">
        Ganti/Update data
      </button>
      <router-link
        class="btn"
        variant="light"
        to="/MainMahasiswa"
      ></router-link>
    </div>
    <hr />
    <table v-show="visible" class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama</th>
          <th scope="col">Nomor</th>
          <th scope="col">Alamat</th>
          <th scope="col" v-if="msg == 'Ganti'">Action</th>
        </tr>
      </thead>
      <tbody v-if="mahasiswa.length > 0">
        <tr v-for="row in mahasiswa" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.nama }}</td>
          <td>{{ row.nomor }}</td>
          <td>{{ row.alamat }}</td>
          <td v-if="msg == 'Ganti'">
            <router-link :to="'/ganti/' + row.id">Update</router-link>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="mahasiswa.length == 0">
        <tr>
          <td colspan="4" align="center">Belum ada data</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import axios from "axios";
//import { response } from 'express';
export default {
  name: "CthTable",
  methods: {
    async getStudents() {
      await axios
        .get("https://62e8fab8249bb1284eb7bd0d.mockapi.io/mahasiswa")
        .then((response) => {
          this.mahasiswa = response.data;
        });
    },
  },
  mounted() {
    this.getStudents();
  },
  data: () => ({
    //onlinestudents : [],
    mahasiswa: [],
    visible: true,
  }),
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.mr10 {
  margin-right: 10px;
}

table {
  border-collapse: collapse;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.table th,
.table td {
  padding: 0.75 rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table .table {
  background-color: #fff;
}

.table-sm th,
.table-sm td {
  padding: 0.3 rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover,
.btn:focus {
  text-decoration: none;
}

.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn.disabled,
.btn:disabled {
  opacity: 0.65;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active,
.btn:not(:disabled):not(.disabled).active {
  background-image: none;
}
</style>