// Initialize variables
let totalSeconds = 24 * 60 * 60; // 24 hours in seconds
let intervalId = null; // To store the interval ID
let isPaused = true; // Pause state

// Function to format time
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Function to update the countdown display
function updateCountdown() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);
}

// Function to start the countdown
function startCountdown() {
  if (!isPaused) return; // Prevent multiple intervals
  isPaused = false;

  intervalId = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateCountdown();
    } else {
      clearInterval(intervalId);
      alert("Time's up! 🚀 Great work on completing the hackathon!");
    }
  }, 1000);
}

// Function to pause the countdown
function pauseCountdown() {
  if (isPaused) return; // Already paused
  isPaused = true;
  clearInterval(intervalId);
}

// Attach event listeners to buttons
document.getElementById("startButton").addEventListener("click", startCountdown);
document.getElementById("pauseButton").addEventListener("click", pauseCountdown);

// Initialize the countdown display
updateCountdown();
