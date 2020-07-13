// JS Files
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import "jquery";
import navOpt from "./nav.js";
import requestPermission from "./reg-sw.js";
import 'materialize-css/dist/js/materialize.min.js';
// import 'swiper';

// REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
  const registration = runtime.register();
  requestPermission();
} else {
    console.log("ServiceWorker belum didukung browser ini.");
}

document.addEventListener("DOMContentLoaded", navOpt);

// CSS Files
import 'materialize-css/dist/css/materialize.min.css';
// import 'swiper/swiper-bundle.css';
import "./../style/style.css";
import "./../style/swiper-opt.css";
import "./../style/responsive.css";