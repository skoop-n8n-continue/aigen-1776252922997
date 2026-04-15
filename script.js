function updateClock() {
    const now = new Date();

    // Time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;

    // Date components
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;

    // Day of the week
    const dayOptions = { weekday: 'long' };
    const dayString = now.toLocaleDateString('en-US', dayOptions);
    document.getElementById('day').textContent = dayString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Run once immediately so there is no delay
updateClock();
