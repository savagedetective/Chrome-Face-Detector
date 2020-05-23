console.log("Goliath online.");

const video = document.querySelector(".webcam");

const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d")

const faceCanvas = document.querySelector(".face");
const faceCtx = canvas.getContext("2d")

const faceDetector = new window.FaceDetector();

console.log(video, canvas, faceCanvas, faceDetector);

//write function to populate users video

async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {width: 1280, height: 720}
    });
    console.log(stream);
}

console.log(populateVideo);
populateVideo();