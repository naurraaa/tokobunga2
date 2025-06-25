<template>
  <div class="container mt-5">
    <!-- Judul halaman admin -->
    <h2 class="mb-4">🌸 Admin - Kelola Data Bunga</h2>

    <!-- Form tambah/edit bunga -->
    <div class="card mb-4">
      <div class="card-header">
        <!-- Judul form berubah sesuai apakah sedang edit atau tambah -->
        <strong>{{ form.id ? "Edit Bunga" : "Tambah Bunga" }}</strong>
      </div>
      <div class="card-body">
        <!-- Form dikirim saat tombol disubmit, tapi dicegah reload dengan prevent -->
        <form @submit.prevent="submitForm">
          <!-- Input nama bunga -->
          <div class="mb-3">
            <label class="form-label">Nama Bunga</label>
            <input v-model="form.name" type="text" class="form-control" required />
          </div>

          <!-- Input harga bunga -->
          <div class="mb-3">
            <label class="form-label">Harga</label>
            <input v-model="form.price" type="number" class="form-control" required />
          </div>

          <!-- Tombol submit -->
          <button type="submit" class="btn btn-primary">
            {{ form.id ? "Update" : "Simpan" }}
          </button>

          <!-- Tombol batal (hanya muncul saat edit) -->
          <button type="button" class="btn btn-secondary ms-2" @click="reset" v-if="form.id">
            Batal
          </button>
        </form>
      </div>
    </div>

    <!-- Daftar bunga yang ditampilkan dari API -->
    <div class="card">
      <div class="card-header"><strong>Daftar Bunga</strong></div>
      <ul class="list-group list-group-flush">
        <!-- Menampilkan setiap bunga dengan tombol edit dan hapus -->
        <li
          v-for="flower in flowers"
          :key="flower.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h6 class="mb-0">{{ flower.name }}</h6>
            <small class="text-muted">Rp {{ flower.price.toLocaleString() }}</small>
          </div>
          <div>
            <button class="btn btn-sm btn-warning me-1" @click="edit(flower)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="hapus(flower.id)">Hapus</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// URL dasar endpoint backend untuk bunga
const API_BASE = "https://backend-tokobunga.nauraramadhiani11.workers.dev/api/flowers";

export default {
  data() {
    return {
      flowers: [], // Menyimpan semua data bunga dari backend
      form: {
        id: null,
        name: "", // nama bunga
        price: "", // harga bunga
      },
    };
  },
  mounted() {
    this.load(); // Memuat data bunga saat komponen selesai dimount
  },
  methods: {
    // Memuat semua data bunga dari backend
    load() {
      axios.get(API_BASE).then((res) => {
        this.flowers = res.data;
      });
    },

    // Menangani form submit: tambah baru atau update
    submitForm() {
      const { id, name, price } = this.form;
      const payload = { name, price };

      if (id) {
        // Jika form ada ID → update bunga
        axios.put(`${API_BASE}/${id}`, payload).then(this.reset);
      } else {
        // Jika tidak → tambah bunga baru
        axios.post(API_BASE, payload).then(this.reset);
      }
    },

    // Mengisi form untuk edit
    edit(flower) {
      this.form = { ...flower };
    },

    // Menghapus bunga berdasarkan ID
    hapus(id) {
      if (confirm("Yakin ingin menghapus bunga ini?")) {
        axios.delete(`${API_BASE}/${id}`).then(this.load);
      }
    },

    // Mereset form dan reload daftar bunga
    reset() {
      this.form = { id: null, name: "", price: "" };
      this.load();
    },
  },
};
</script>
