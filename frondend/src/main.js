// Mengimpor file CSS utama aplikasi yang berada di folder /assets
import "./assets/main.css";

// Mengimpor fungsi createApp dari Vue 3 untuk membuat instance aplikasi
import { createApp } from "vue";

// Mengimpor komponen utama aplikasi (App.vue)
import App from "./App.vue";

// Mengimpor konfigurasi router untuk mengatur halaman (routing)
import router from "./router";

// Mengimpor file CSS dari Bootstrap untuk styling bawaan
import "bootstrap/dist/css/bootstrap.min.css";

// Membuat instance aplikasi Vue berdasarkan komponen App.vue
const app = createApp(App);

// Mengaktifkan fitur routing di dalam aplikasi dengan mendaftarkan router
app.use(router);

// Memasang (mount) aplikasi Vue ke dalam elemen HTML dengan id="app" (biasanya di index.html)
app.mount("#app");
