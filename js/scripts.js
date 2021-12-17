const $video = document.querySelector('#video');
const $playBtn = document.querySelector('#playBtn');
const $pauseBtn = document.querySelector('#pauseBtn');
const $backwardBtn = document.querySelector('#backwardBtn');
const $forwardBtn = document.querySelector('#forwardBtn');
const $body = document.querySelector('body');


$playBtn.addEventListener ("click", handlePlayBtn);

function handlePlayBtn() {
    $video.play();
    $playBtn.hidden = true;
    $pauseBtn.hidden = false;
    $backwardBtn.hidden = false;
    $forwardBtn.hidden = false;
    $body.classList.add('turn-off-lights');
    document.title = 'Reproducing Trailer...'
}

$pauseBtn.addEventListener ("click", handlePauseBtn);

function handlePauseBtn() {
    $video.pause();
    $pauseBtn.hidden = true;
    $playBtn.hidden = false;
    $body.classList.remove('turn-off-lights');
    document.title = 'Video Player | Josue'
}

$backwardBtn.addEventListener ("click", handleBackwardBtn);

function handleBackwardBtn() {
    let videoMinus10 = $video.currentTime - 10;
    $video.currentTime = videoMinus10;
}

$forwardBtn.addEventListener ("click", handleForwardBtn);

function handleForwardBtn() {
    let videoPlus10 = $video.currentTime + 10;
    $video.currentTime = videoPlus10;
}

let $progressBar = document.querySelector('#progressBar');

$video.addEventListener("loadedmetadata",  setMaxRangeValue);

function setMaxRangeValue() {
    let duration = $video.duration;
    $progressBar.max = duration;
}

$video.addEventListener("timeupdate",  handleProgressBar);

function handleProgressBar() {
    let inputValue = $video.currentTime;
    $progressBar.value = inputValue;
}

$progressBar.addEventListener("input",  handleClickProgerssBar);

function handleClickProgerssBar() {
    let progressBarValue = $progressBar.value;
    $video.currentTime = progressBarValue;
}