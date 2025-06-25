<template>
  <!-- Komponen kartu bunga dengan styling Bootstrap -->
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <!-- Menampilkan nama bunga dari properti 'flower' -->
      <h5 class="card-title">{{ flower.name }}</h5>
      <!-- Menampilkan harga bunga, diformat dengan awalan "Rp" -->
      <p class="card-text">Rp {{ flower.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // Komponen ini menerima properti 'flower' dari parent (berisi data bunga)
  props: ["flower"],
};
</script>
