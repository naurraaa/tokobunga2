// Mengimpor fungsi untuk membuat router dan mode riwayat browser
import { createRouter, createWebHistory } from "vue-router";

// Mengimpor komponen halaman (view) yang akan ditampilkan sesuai rute
import Home from "../views/HomeView.vue";
import Admin from "../views/AdminView.vue";

// Daftar rute aplikasi (array of route objects)
const routes = [
  {
    path: "/", // URL path root (misal: http://localhost:5173/)
    component: Home,
  }, // Komponen yang ditampilkan saat path "/" diakses

  {
    path: "/admin", // URL path "/admin"
    component: Admin,
  }, // Komponen yang ditampilkan saat path "/admin" diakses
];

// Membuat instance router dan meng-export-nya
export default createRouter({
  history: createWebHistory(), // Menggunakan HTML5 history mode (tanpa hash '#')
  routes, // Rute-rute yang didefinisikan di atas
});
