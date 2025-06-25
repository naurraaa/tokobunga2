<template>
  <div class="container mt-4">
    <!-- Judul halaman -->
    <h2>Daftar Bunga</h2>

    <!-- Baris Bootstrap untuk menampung kolom bunga -->
    <div class="row">
      <!-- Loop setiap bunga dan tampilkan menggunakan komponen FlowerCard -->
      <div class="col-md-4 mb-3" v-for="flower in flowers" :key="flower.id">
        <!-- Kirim data bunga ke komponen kartu -->
        <FlowerCard :flower="flower" />
      </div>
    </div>
  </div>
</template>

<script>
// Import axios untuk mengambil data dari API
import axios from "axios";

// Import komponen kartu bunga
import FlowerCard from "../components/FlowerCard.vue";

export default {
  // Daftarkan komponen lokal yang akan digunakan di template
  components: { FlowerCard },

  // Data lokal komponen (array bunga)
  data() {
    return {
      flowers: [], // Akan diisi dengan data dari backend
    };
  },

  // Lifecycle hook yang dijalankan setelah komponen tampil
  mounted() {
    // Ambil data dari backend API
    axios
      .get("https://backend-tokobunga.nauraramadhiani11.workers.dev/api/flowers")
      .then((res) => {
        // Isi data bunga dengan hasil dari server
        this.flowers = res.data;
      })
      .catch((err) => {
        // Tampilkan error jika gagal mengambil data
        console.error("Gagal mengambil data bunga:", err);
      });
  },
};
</script>
