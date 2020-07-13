import M from "./materialize.min.js";
import {getData, homePage, standId, getSavedTeams} from "./api.js";
import {saveIDB, deleteTeam, checkingIDB} from "./db.js";
import swiperOn from "./swiper-opt.js";

  // Activate sidebar nav
  let elems = document.querySelectorAll(".sidenav");
  

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
            swiperOn();
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

const navOpt = () => {
  const pg = window.location.pathname.substr(1);
	if (pg === 'detail-team.html') {
		

    // Fetch Data by Id
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");

    const check = () => {
        checkingIDB(parseInt(id)).then(result => {
            if(typeof result === 'undefined') {
                fab.style.display = 'inline';
                fabh.style.display = 'none';
            } else {
                fabh.style.display = 'inline';
                fab.style.display = 'none';
            }
        })
    }


    const fab = document.getElementById("fab");
    const fabh = document.getElementById("fab-hapus");
    const take = standId(id);
    // Checking favorit team or not
    var fav = urlParams.get("fav");
    if(fav) {
        fab.style.display = 'none';
        fabh.style.display = 'inline';
    } else {
        check();
    }

    // onclick fa button
    fab.onclick = function() {
        take.then(function(saveTeam) {
            saveIDB(saveTeam);  
        })
        fabh.style.display = "inline";
    }

    // onclick fa hapus button
    fabh.onclick = function() {
        take.then(function(data) {
            deleteTeam(data);
        })
        fabh.style.display = "none";
    }
	} else {
		if (page === '') {
			page = 'home';
		}
		M.Sidenav.init(elems);
		loadNav();
		loadPage(page);
	}
}

export default navOpt;