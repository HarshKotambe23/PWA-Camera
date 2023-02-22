
import {
    startBtn,
    captureBtn,
    closeBtn,
    player,
    switchBtn,
    canvas,
    restartBtn,
    changeMode,

    // mode
} from "./constants.js"
import { openCamera, closeCamera } from "./camera.js"


switchBtn.addEventListener("click", () => {
    changeMode()
    player.classList.add("d-none")
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }
    openCamera()
})

startBtn.addEventListener("click", () => {
    openCamera()
    //handleCamera End

    console.log("start button clicked")

    // player.setAttribute("src", "./1.mp4")
})
captureBtn.addEventListener("click", () => {

    const preview = canvas.getContext("2d")
    preview.drawImage(player, 0, 0, canvas.height, canvas.width)
    canvas.classList.remove("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    restartBtn.classList.remove("d-none")


})
closeBtn.addEventListener("click", () => {
    console.log("close button clicked")

    console.log(player.srcObject.getVideoTracks());
    closeCamera()
})
restartBtn.addEventListener("click", () => {
    closeCamera()
    openCamera()

})
