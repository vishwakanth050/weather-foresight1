async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; // Replace this

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
        document.getElementById("desc").innerText = "Condition: " + data.weather[0].description;

    } catch (error) {
        alert("Error fetching data");
    }
}