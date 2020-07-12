document.addEventListener("DOMContentLoaded", () => {
  // Activate sidebar nav
  let elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);
  

  const loadNav = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status != 200) return;

        // Muat daftar tautan menu
        document.querySelectorAll(".topnav, .sidenav").forEach(elm => {
          elm.innerHTML = xhttp.responseText;
        });

        // Daftarkan event listener untuk setiap tautan menu
        document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
            elm.addEventListener("click", event => {
            // Tutup sidenav
            let sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();
    
            // Muat konten halaman yang dipanggil
            page = event.target.getAttribute("href").substr(1);

            loadPage(page);
            });
        });
      } 
    };

    xhttp.open("GET", "nav.html", true);
    xhttp.send();

    }

    loadNav();
  });


  // Load page content
  let page = window.location.hash.substr(1);
  if (page == "") page = "home";
    
  const loadPage = page => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        let content = document.querySelector("#body-content");
        if (this.status == 200) {
          
          content.innerHTML = xhttp.responseText;

          if(page === "home") {
            homePage();
          } else if(page === "ligue-1") {
            getData(2015);
          } else if(page === "primera-division") {
            getData(2014);
          } else if(page === "seriea") {
            getData(2019);
          } else if(page === "champions-l") {
            getData(2001);
          } else if(page === "favorit") {
            getSavedTeams();
          }

        } else if (this.status == 404) {
          content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
        } else {
          content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
        }
      }
    };
    xhttp.open("GET", "pages/" + page + ".html", true);
    xhttp.send();
}

loadPage(page);