console.log("Goliath online.");

const video = document.querySelector(".webcam");

const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d")

const faceCanvas = document.querySelector(".face");
const faceCtx = canvas.getContext("2d")

const faceDetector = new window.FaceDetector();

console.log(video, canvas, faceCanvas, faceDetector);

