// Set the target date: Saturday, November 22, 2025 at 11:00 AM ET
const targetDate = new Date('2025-11-22T11:00:00-05:00').getTime();

// Display the target date
document.getElementById('target-date').textContent = 'Target: Saturday, November 22, 2025 at 11:00 AM ET';

// Update countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate time units
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // If countdown is finished
    if (timeRemaining < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('target-date').textContent = 'Time to see Lela! 🎉';
    }
}

// Initial update
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
