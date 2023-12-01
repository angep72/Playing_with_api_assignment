const apikey = "68510ad7f45b2066ef6ba443440481ca"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const data_in_searchbox =document.querySelector(".search input");
const search_btn =document.querySelector(".search button");


async function MyCheckWeather (city) {

    const api_data = await fetch (apiUrl + city +`&appid=${apikey}`);

if (api_data.status == 404 ){
    //console.log("hello world  ")
    document.querySelector(".Invalid-city").style.display = "block";
}else {
    var data = await api_data.json();
    console.log (data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +"°C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".Invalid-city").style.display = "none";

}
    
 }
search_btn.addEventListener("click", ()=>{
    MyCheckWeather (data_in_searchbox.value);
})
