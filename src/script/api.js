var base_url = "https://api.football-data.org/";

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
  console.log(error);
}


// Ligue 1
function getDataLigue1() {

    fetch(base_url + "v2/competitions/2015/", {
            headers: {
                "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
            },
        })
        .then(status)
        .then(json)
        .then(function(data) {
        console.log(data);
            isiKonten1(data);
            getStandingsLigue1()
        })
        .catch(error);
}

function getStandingsLigue1() {

    fetch(base_url + "v2/competitions/2015/standings/", {
            headers: {
                "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
            },
        })
        .then(status)
        .then(json)
        .then(function(data) {

          // Showing Total
          const t_st = document.getElementById("ligue-1-t-st");
          t_st.innerHTML = `<h6 class="stand-total">${data.standings[0].table.length} Total</h6>`;

        var listStand = "";
        console.log(data.standings[0].table);
        data.standings[0].table.forEach(function(data) {
          listStand += `
                  <a href="#" class="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12 sch-detail hoverable">
                    <div class="card-sch left-align">
                          <img src="${data.team.crestUrl}" height="70" width="80">
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
        
        document.getElementById("standings").innerHTML = listStand;
  
        })
        .catch(error);
}

function isiKonten1(data) {
    const name = document.querySelector(".name-1");
    const from = document.querySelector(".from-1");
    const end = document.querySelector(".end-1");
    const area = document.querySelector(".area-1");

    const fromDate = new Date(data.currentSeason.startDate);
    const endDate = new Date(data.currentSeason.endDate);

    name.innerHTML = data.name;
    area.innerHTML = data.area.name;
    from.innerHTML = "<span>Start</span> " + fromDate.toDateString() + ", &nbsp;";
    end.innerHTML = "<span>End</span> " + endDate.toDateString();
}

// Primera Division
function getDataPrimeraDivision() {

  fetch(base_url + "v2/competitions/2014/", {
          headers: {
              "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
          },
      })
      .then(status)
      .then(json)
      .then(function(data) {
      var articlesHTML = "";
      console.log(data);
          isiKonten2(data);
          getStandingsPrimeraDivision()
      })
      .catch(error);
}

function getStandingsPrimeraDivision() {

  fetch(base_url + "v2/competitions/2014/standings/", {
          headers: {
              "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
          },
      })
      .then(status)
      .then(json)
      .then(function(data) {

        // Showing Total
        const t_st = document.getElementById("pd-t-st");
        t_st.innerHTML = `<h6 class="stand-total">${data.standings[0].table.length} Total</h6>`;

      var listStand = "";
      console.log(data.standings[0].table);
      data.standings[0].table.forEach(function(data) {
        listStand += `
                <a href="#" class="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12 sch-detail hoverable">
                  <div class="card-sch left-align">
                        <img src="${data.team.crestUrl}" height="70" width="80">
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
      
      document.getElementById("standings-2").innerHTML = listStand;

      })
      .catch(error);
}

function isiKonten2(data) {
  const name = document.querySelector(".name-2");
  const from = document.querySelector(".from-2");
  const end = document.querySelector(".end-2");
  const area = document.querySelector(".area-2");

  const fromDate = new Date(data.currentSeason.startDate);
  const endDate = new Date(data.currentSeason.endDate);

  name.innerHTML = data.name;
  area.innerHTML = data.area.name;
  from.innerHTML = "<span>Start</span> " + fromDate.toDateString() + ", &nbsp;";
  end.innerHTML = "<span>End</span> " + endDate.toDateString();
}

// FIFA
function getDataFIFA() {

  fetch(base_url + "v2/competitions/2019/", {
          headers: {
              "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
          },
      })
      .then(status)
      .then(json)
      .then(function(data) {
      var articlesHTML = "";
      console.log(data);
          isiKonten3(data);
          getStandingsFIFA()
      })
      .catch(error);
}

function getStandingsFIFA() {

  fetch(base_url + "v2/competitions/2019/standings/", {
          headers: {
              "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
          },
      })
      .then(status)
      .then(json)
      .then(function(data) {

        // Showing Total
        const t_st = document.getElementById("serie-a-t-st");
        t_st.innerHTML = `<h6 class="stand-total">${data.standings[0].table.length} Total</h6>`;

      var listStand = "";
      console.log(data.standings[0].table);
      data.standings[0].table.forEach(function(data) {
        listStand += `
                <a href="#" class="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12 sch-detail hoverable">
                  <div class="card-sch left-align">
                        <img src="${data.team.crestUrl}" height="70" width="80" alt="${data.team.crestUrl}">
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
      
      document.getElementById("standings-3").innerHTML = listStand;

      })
      .catch(error);
}

function isiKonten3(data) {
  const name = document.querySelector(".name-3");
  const from = document.querySelector(".from-3");
  const end = document.querySelector(".end-3");
  const area = document.querySelector(".area-3");

  const fromDate = new Date(data.currentSeason.startDate);
  const endDate = new Date(data.currentSeason.endDate);

  name.innerHTML = data.name;
  area.innerHTML = data.area.name;
  from.innerHTML = "<span>Start</span> " + fromDate.toDateString() + ", &nbsp;";
  end.innerHTML = "<span>End</span> " + endDate.toDateString();
}