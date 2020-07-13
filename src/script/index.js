// CSS Files
import "./../style/style.css";
import "./../style/swiper-opt.css";
import "./../style/responsive.css";

// JS Files
import "jquery";
import Swiper from "./swiper.js";
import navOpt from "./nav.js";
import requestPermission from "./reg-sw.js";

// REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .then(() => {
          console.log("work!");
        })
        .catch(() => {
          console.log("not work!");
        });
        requestPermission();
    });
  } else {
    console.log("ServiceWorker belum didukung browser ini.");
}

document.addEventListener("DOMContentLoaded", navOpt);