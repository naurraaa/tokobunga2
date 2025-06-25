<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ flower.name }}</h5>
      <p class="card-text">Rp {{ flower.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["flower"],
};
</script>
