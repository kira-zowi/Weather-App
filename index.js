    document.addEventListener("DOMContentLoaded", () => {
        const apiKey = "9f565d12cf039d20962301035dbfa803";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon")
    
        console.log(searchBox, searchBtn); 
    
        async function checkWeather(city) {
            const url = apiUrl + city + `&appid=${apiKey}`;
            console.log("API URL:", url); 
            const response = await fetch(url);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }else{
                const data = await response.json();
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "mist.png";
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display = "none";

                

            }
            
        }

    
        searchBtn.addEventListener("click", () => {
             checkWeather(searchBox.value);
        });
    });
    
