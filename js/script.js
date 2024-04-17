
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

