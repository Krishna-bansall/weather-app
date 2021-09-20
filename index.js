const apiKey = "534405fd16c19c15ab2768d15ed4c9c5";
const form = document.getElementById("form");


const fetchData =  async (apiKey, city) => {
   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, {origin: "cors"})
   const data = await res.json();
   console.log(data)
   return data;
}


form.addEventListener("submit", async (e) => {
   e.preventDefault();
   const city = document.getElementById("search").value;
   changeHtml(await fetchData(apiKey, city))
});

const changeHtml = (data) => {
   main.innerHTML = `
   <main>
   <div class="container">
   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>
   <h1>${data.main.temp}C</h1>
   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>
   </div>
   <h2>${data.weather[0].description.toUpperCase()}</h2>
   </main>
   `

}