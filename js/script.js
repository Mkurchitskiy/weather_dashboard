
// Background Toggle Switch
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector("#light-dark-switch input[type='checkbox']");
    const modeText = document.querySelector("#mode-text");

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // For Theme Saving Preferences
            modeText.textContent = 'Dark Mode';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // For Theme Saving Preferences
            modeText.textContent = 'Light Mode';
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    // Checks Local Storage for theme preferences
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.body.classList.add(currentTheme === 'dark' ? 'dark-mode' : '');
        toggleSwitch.checked = currentTheme === 'dark';
        modeText.textContent = currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode';
    }
});

// Current time and date features 
function updateTimeAndDate() {
    const currentTimeAndDate = new Date();  // Get current date and time
    const formattedTime = currentTimeAndDate.toLocaleTimeString();  // Format time as a readable string
    const formattedDate = currentTimeAndDate.toLocaleDateString(); // Format date as a readable string

    document.getElementById('current-time').innerText = formattedTime; // Set the formatted time as text of the span
    document.getElementById('current-date').innerText = formattedDate; // Set the formatted date as text of the span
}

// Update the time every second
setInterval(updateTimeAndDate, 1000);

// 24 Hourly Forecasts
document.addEventListener("DOMContentLoaded", function () {
    const forecastSlider = document.querySelector(".hourly-forecast-slider");

    for (let i = 1; i < 24; i++) {
        const forecast = document.createElement("div");
        forecast.className = "hourly-forecast";

        // Define the forecast time
        const forecastTime = document.createElement("time");
        forecastTime.className = "forecast-time";
        const time = new Date(0, 0, 0, i, 0); // Creating a date with hours only
        forecastTime.textContent = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Weather icon
        const weatherIcon = document.createElement("img");
        weatherIcon.className = "weather-icon";
        weatherIcon.src = "placeholder.png"; // Placeholder icon
        weatherIcon.alt = "Weather Icon";

        // Temperature data
        const tempData = document.createElement("p");
        tempData.className = "temp-data";
        tempData.textContent = "-- °C"; // Placeholder temperature

        // Wind direction icon and data
        const windIcon = document.createElement("img");
        windIcon.className = "wind-icon";
        windIcon.src = "placeholder.png"; // Placeholder wind icon
        windIcon.alt = "Wind from direction";

        const windData = document.createElement("p");
        windData.className = "wind-data";
        windData.textContent = "-- m/s"; // Placeholder wind speed

        // Append all elements to the forecast container
        forecast.appendChild(forecastTime);
        forecast.appendChild(weatherIcon);
        forecast.appendChild(tempData);
        forecast.appendChild(windIcon);
        forecast.appendChild(windData);

        // Add the forecast to the forecast slider
        forecastSlider.appendChild(forecast);
    }

    // Add a wheel event listener to the slider
    forecastSlider.addEventListener("wheel", function (e) {
        e.preventDefault();  // Prevent the default behavior (vertical scrolling)
        
        // Adjust the scroll position horizontally
        forecastSlider.scrollLeft += e.deltaY * 2;  // Multiply by a factor for faster scrolling
    });
});

