var base_url = "https://api.football-data.org/v2/";

function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

function json(response) {
  return response.json();
}

function error(error) {
  console.log("Error : " + error);
}


// Ligue 1
function getData(id) {

    if ('caches' in window) {
      caches.match(base_url + `competitions/${id}/`).then(function(response) {
        if (response) {
          response.json()
          .then(function (data) {
            isiKonten(data);
            getStandings(id);
          })
        }
      })
    }

    fetch(base_url + `competitions/${id}/`, {
            headers: {
                "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
            },
        })
        .then(status)
        .then(json)
        .then(function(data) {
        console.log(data);
            isiKonten(data);
            getStandings(id);
        })
        .catch(error);  
  }

function getStandings(id) {

    if ('caches' in window) {
      caches.match(base_url + `competitions/${id}/standings/`).then(function(response) {
        if (response) {
          response.json().then(function (data) {
            // Showing Total
          const t_st = document.getElementById("stTotal");
          t_st.innerHTML = `<h6 class="stand-total">${data.standings[0].table.length} Total</h6>`;
            var listStand = "";
            console.log(data.standings[0].table);
            data.standings[0].table.forEach(function(data) {
              listStand += `
                    <a href="detail-team.html" class="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12 sch-detail hoverable">
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
    fetch(base_url + `competitions/${id}/standings/`, {
            headers: {
                "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
            },
        })
        .then(status)
        .then(json)
        .then(function(data) {

          // Showing Total
          const t_st = document.getElementById("stTotal");
          t_st.innerHTML = `<h6 class="stand-total">${data.standings[0].table.length} Total</h6>`;

        var listStand = "";
        console.log(data.standings[0].table);
        data.standings[0].table.forEach(function(data) {
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

function isiKonten(data) {
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