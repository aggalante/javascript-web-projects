const video = document.getElementById("video");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get the minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = `0${mins}`;
  }

  // Get the seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = `0${secs}`;
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

playButton.addEventListener("click", toggleVideoStatus);

stopButton.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
