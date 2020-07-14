import {getAll} from "./db.js";

const base_url = "https://api.football-data.org/v2/";
const API = "e9cc4588ffe7402d86183b403094e7d6";
const fetchAPI = url => {
  return fetch(url, {
    headers: {
        "X-Auth-Token": API
    },
  })
}



const status = response => {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

const json = response => {
  return response.json();
}

const error = error => {
  console.log("Error : " + error);
}


// Ligue 1
const getData = id => {

    if ('caches' in window) {
      caches.match(`${base_url}competitions/${id}/`).then(response => {
        if (response) {
          response.json()
          .then(data => {
            isiKonten(data);
            getStandings(id);
          })
        }
      })
    }

    fetchAPI(`${base_url}competitions/${id}/`)
      .then(status)
      .then(json)
      .then(data => {
          isiKonten(data);
          getStandings(id);
      })
      .catch(error);  
  }

const getStandings = id => {

    if ('caches' in window) {
      caches.match(base_url + `competitions/${id}/standings/`).then(response => {
        if (response) {
          response.json().then(data => {
            // Showing Total
          const t_st = document.getElementById("stTotal");
          t_st.innerHTML = `<h6 class="stand-total">${data.standings[0].table.length} Total</h6>`;
            let listStand = "";
            data.standings[0].table.forEach(data => {
              listStand += `
                    <a href="detail-team.html?id=${data.team.id}" class="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12 sch-detail hoverable">
                      <div class="card-sch left-align">
                            <img src="${data.team.crestUrl}" height="70" width="80" alt="${data.team.name}">
                          <div class="name-stand white-color">
                              ${data.position}. ${data.team.name}
                              <div class="points center-align">
                                  ${data.points} Points
                              </div>
                          </div>
                          
                          <div class="info right-align">   
                              <div class="result win d-inline center-align">
                                  ${data.won} Won
                              </div>
                              <div class="result lose d-inline center-align">
                                  ${data.lost} Lost
                              </div>
                              <div class="result draw d-inline center-align">
                                  ${data.draw} Draw
                              </div>
                          </div>
                      </div>
                  </a>
                  `;
            });
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("st").innerHTML = "Standings";
            document.getElementById("standings").innerHTML = listStand;
          })
        }
      })
    }
    
    fetchAPI(`${base_url}competitions/${id}/standings/`)
      .then(status)
      .then(json)
      .then(data => {

        // Showing Total
        const t_st = document.getElementById("stTotal");
        t_st.innerHTML = `<h6 class="stand-total">${data.standings[0].table.length} Total</h6>`;

        let listStand = "";
        data.standings[0].table.forEach(data => {
          listStand += `
                  <a href="detail-team.html?id=${data.team.id}" class="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12 sch-detail hoverable">
                    <div class="card-sch left-align">
                          <img src="${data.team.crestUrl}" height="70" width="80" alt="${data.team.name}">
                        <div class="name-stand white-color">
                            ${data.position}. ${data.team.name}
                            <div class="points center-align">
                                ${data.points} Points
                            </div>
                        </div>
                        
                        <div class="info right-align">   
                            <div class="result win d-inline center-align">
                                ${data.won} Won
                            </div>
                            <div class="result lose d-inline center-align">
                                ${data.lost} Lost
                            </div>
                            <div class="result draw d-inline center-align">
                                ${data.draw} Draw
                            </div>
                        </div>
                    </div>
                </a>
                `;
        });
        
        document.getElementById("st").innerHTML = "Standings";
        document.getElementById("standings").innerHTML = listStand;
  
        })
        .catch(error);
}

const isiKonten = data => {
    const fromDate = new Date(data.currentSeason.startDate);
    const endDate = new Date(data.currentSeason.endDate);
    
    const name = document.getElementById("name");
    const from = document.getElementById("from");
    const end = document.getElementById("end");
    const area = document.getElementById("area");

    name.innerHTML = data.name;
    area.innerHTML = data.area.name;
    from.innerHTML = "<span>Start</span> " + fromDate.toDateString() + ", &nbsp;";
    end.innerHTML = "<span>End</span> " + endDate.toDateString();
}

const homePage = () => {
  const konten = `
                <div class="sub-banner sub-banner-car">
                  <div class="swiper-container">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide black-color">
                          <div class="img-league">
                            <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="a" width="110" class="z-depth-3">
                          </div>
                          <div class="info-league">
                            <div class="name-league">
                              Ligue 1
                            </div>
                            <div class="area-league">
                              France
                            </div>
                          </div>
                        </div>
                        <div class="swiper-slide black-color">
                          <div class="img-league">
                            <img src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" alt="a" width="110" class="z-depth-3">
                          </div>
                          <div class="info-league">
                            <div class="name-league">
                              Primera Division
                            </div>
                            <div class="area-league">
                              Spain
                            </div>
                          </div>
                        </div>
                        <div class="swiper-slide black-color">
                          <div class="img-league">
                            <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" alt="a" width="110" class="z-depth-3">
                          </div>
                          <div class="info-league">
                            <div class="name-league">
                              Serie A
                            </div>
                            <div class="area-league">
                              Italy
                            </div>
                          </div>
                        </div>
                        <div class="swiper-slide black-color">
                          <div class="img-league">
                            <img src="https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg" alt="a" width="80" class="z-depth-3">
                          </div>
                          <div class="info-league">
                            <div class="name-league">
                              UEFA Champions League
                            </div>
                            <div class="area-league">
                              Europe
                            </div>
                          </div>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                  </div>
              </div>
              `;

              document.getElementById("home-page").innerHTML = konten;
              
}

const standId = id => {

  return new Promise((resolve, reject) => {
    if ('caches' in window) {
      caches.match(base_url + `teams/${id}/`).then(response => {
        if (response) {
          response.json()
          .then(data => {
            isiInfo(data);
            isiSquad(data);
            resolve(data);
          })
        }
      })
    }

    fetchAPI(`${base_url}teams/${id}/`)
      .then(status)
      .then(json)
      .then(data => {
          isiInfo(data);
          isiSquad(data);
          resolve(data);
      })
      .catch(error);  
  });
}

const isiInfo = data => {
  const img = document.querySelector(".brand-team");
  const name_st = document.getElementById("name-st");
  const shortname_st = document.getElementById("shortname-st");
  const address_st = document.getElementById("address-st");
  const phone_st = document.getElementById("phone-st");
  const color_st = document.getElementById("color-st");
  const founded_st = document.getElementById("founded-st");
  const email_st = document.getElementById("email-st");
  const web_st = document.getElementById("web-st");

  img.innerHTML = `<img src="${data.crestUrl}" alt="" height="175px" class="brand-team-img z-depth-3">`;
  name_st.innerHTML = data.name;
  shortname_st.innerHTML = data.shortName;
  address_st.innerHTML = data.address;
  phone_st.innerHTML = data.phone;
  color_st.innerHTML = data.clubColors;
  founded_st.innerHTML = data.founded;
  email_st.innerHTML = data.email;
  web_st.innerHTML = `<a href="${data.website}">Website</a>`;
}

const isiSquad = data => {

  let isiTabel = `
    <table class="striped highlight">
      <thead>
        <tr>
            <th class="center-align">Nomor</th>
            <th>Nama</th>
            <th>Posisi</th>
            <th>Role</th>
            <th>KWN</th>
        </tr>
      </thead>

      <tbody>
      `;

  data.squad.forEach(sq => {
    let no = sq.shirtNumber;
    if(no === null) {
      no = "-";
    }
    isiTabel += `
    <tr>
      <td class="center-align">${no}</td>
      <td>${sq.name}</td>
      <td>${sq.position}</td>
      <td>${sq.role}</td>
      <td>${sq.nationality}</td>
    </tr>
    `;
  })

  isiTabel += `
    </tbody>
  </table>
  `;

  document.getElementById("tabel").innerHTML = isiTabel;
}

const getSavedTeams = () => {
  getAll().then(data => {
    // Menyusun komponen card artikel secara dinamis
    let listTeam = "";
    let jml = 0;
    data.forEach(datateam => {
      listTeam += `
              <a href="detail-team.html?id=${datateam.id}&fav=true" class="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12 sch-detail sch-detail-white hoverable">
                <div class="card-sch left-align">
                  <img src="${datateam.crestUrl}" height="70" width="80" alt="${datateam.name}">
                  <div class="name-stand purple-color">
                    ${datateam.name}
                  </div>
                  <div class="founded-stand purple-color">
                    ${datateam.founded}
                  </div>
                </div>
              </a> 
                `;
      jml++;
    });
    // Sisipkan komponen card ke dalam elemen dengan id #body-content
    document.getElementById("jml").innerHTML = `${jml} Daftar`;
    
    if(jml != 0) {
      document.getElementById("list-fav").innerHTML = listTeam;
    } else {
      document.getElementById("list-fav").innerHTML = `<div class="white-color">Anda tidak mempunyai tim favorit</div>`;
    }

  });
}

export {
  getData,
  homePage,
  standId,
  getSavedTeams
}