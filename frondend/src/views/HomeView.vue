<template>
  <div class="container mt-4">
    <h2>Daftar Bunga</h2>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="flower in flowers" :key="flower.id">
        <FlowerCard :flower="flower" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FlowerCard from "../components/FlowerCard.vue";

export default {
  components: { FlowerCard },
  data() {
    return { flowers: [] };
  },
  mounted() {
    axios
      .get("https://backend-tokobunga.nauraramadhiani11.workers.dev/api/flowers")
      .then((res) => {
        this.flowers = res.data;
      })
      .catch((err) => {
        console.error("Gagal mengambil data bunga:", err);
      });
  },
};
</script>
