const container = document.querySelector(".container");
const input = document.querySelector("input");

let usersArray = [];

const createCardList = (array) => {
  container.innerHTML = "";

  array.forEach((obj) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =
     ` <div class="name">State Name</div>
    <div class="name-content">${obj.Province}</div>
    <div class="confirmed">Confirmed Cases</div>
    <div class="confirmed-content">${obj.Confirmed}</div>
    <div class="deaths">Deaths</div>
    <div class="deaths-content">${obj.Deaths}</div>
    <div class="recovered">Recovered</div>
    <div class="recovered-content">${obj.Recovered}</div>
    <div class="active">Active</div>
    <div class="active-content">${obj.Active}</div>`;
    container.appendChild(card);
  });
};

fetch("https://api.covid19api.com/live/country/india/status/confirmed/date/2021-05-03")
  .then((data) => {
    return data.text();
    // return data.json();
    // console.log ka example
  })
  .then((result) => {
    console.log(JSON.parse(result));
    usersArray = JSON.parse(result);
    createCardList(usersArray);
  });

input.addEventListener("input", (event) => {
  const searchStr = event.target.value.toLowerCase();

  const filteredArray = usersArray.filter((ele) => {
    return (
      ele.Province.toLowerCase().includes(searchStr)
    );
  });

  createCardList(filteredArray);
});

// particle js configuration
particlesJS.load("particles-js", "particles.json"); 
