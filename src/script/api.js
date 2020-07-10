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
  console.log("Error : " + error);
}

function getDataLigue1() {

    fetch(base_url + "v2/competitions/2015/", {
            headers: {
                "X-Auth-Token": "e9cc4588ffe7402d86183b403094e7d6"
            },
        })
        .then(status)
        .then(json)
        .then(function(data) {
        var articlesHTML = "";
        console.log(data);
        // data.result.forEach(function(article) {
        //     articlesHTML += `
        //         <div class="card">
        //             <a href="./article.html?id=${article.id}">
        //             <div class="card-image waves-effect waves-block waves-light">
        //                 <img src="${article.thumbnail}" />
        //             </div>
        //             </a>
        //             <div class="card-content">
        //             <span class="card-title truncate">${article.title}</span>
        //             <p>${article.description}</p>
        //             </div>
        //         </div>
        //         `;
        // });
        // document.getElementById("articles").innerHTML = articlesHTML;

            isiKonten1(data);
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
        var listStand = "";
        console.log(data.standings[0].table);
        data.standings[0].table.forEach(function(data) {
          listStand += `
                  <a href="#" class="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12 sch-detail hoverable">
                    <div class="card-sch left-align">
                          <img src="${data.team.crestUrl}" height="90">
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

    name.innerHTML = data.name;
    area.innerHTML = data.area.name;
    from.innerHTML = "<span>Start</span> " + data.currentSeason.startDate + ", ";
    end.innerHTML = "<span>End</span> " + data.currentSeason.endDate;
}