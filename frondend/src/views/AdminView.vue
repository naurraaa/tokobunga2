<template>
  <div class="container mt-5">
    <h2 class="mb-4">🌸 Admin - Kelola Data Bunga</h2>

    <div class="card mb-4">
      <div class="card-header">
        <strong>{{ form.id ? "Edit Bunga" : "Tambah Bunga" }}</strong>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label class="form-label">Nama Bunga</label>
            <input v-model="form.name" type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Harga</label>
            <input v-model="form.price" type="number" class="form-control" required />
          </div>

          <button type="submit" class="btn btn-primary">
            {{ form.id ? "Update" : "Simpan" }}
          </button>
          <button type="button" class="btn btn-secondary ms-2" @click="reset" v-if="form.id">
            Batal
          </button>
        </form>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><strong>Daftar Bunga</strong></div>
      <ul class="list-group list-group-flush">
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

const API_BASE = "https://backend-tokobunga.nauraramadhiani11.workers.dev/api/flowers";

export default {
  data() {
    return {
      flowers: [],
      form: {
        id: null,
        name: "",
        price: "",
      },
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios.get(API_BASE).then((res) => {
        this.flowers = res.data;
      });
    },
    submitForm() {
      const { id, name, price } = this.form;
      const payload = { name, price };

      if (id) {
        axios.put(`${API_BASE}/${id}`, payload).then(this.reset);
      } else {
        axios.post(API_BASE, payload).then(this.reset);
      }
    },
    edit(flower) {
      this.form = { ...flower };
    },
    hapus(id) {
      if (confirm("Yakin ingin menghapus bunga ini?")) {
        axios.delete(`${API_BASE}/${id}`).then(this.load);
      }
    },
    reset() {
      this.form = { id: null, name: "", price: "" };
      this.load();
    },
  },
};
</script>
