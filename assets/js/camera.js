import { canvas, captureBtn, closeBtn, player, restartBtn, startBtn, switchBtn, changeMode } from "./constants.js"

let mode = "user"

export const changeMode = (arg) => {

    mode = mode === "user" ? "environment" : "user"

}

export const closeCamera = () => {
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }

    captureBtn.classList.add("d-none")
    closeBtn.classList.add("d-none")
    startBtn.classList.remove("d-none")
    player.classList.add("d-none")
    switchBtn.classList.add("d-none")
    canvas.classList.add("d-none")
    restartBtn.classList.add("d-none")
}

export const openCamera = async () => {
    //handleCamera Start
    if (navigator.mediaDevices) {
        document.getElementById("loader").innerHTML = `Loading......<h1 class=" spinner-border text-danger"></h1> `
        startBtn.setAttribute("disabled", true)
        try {
            const x = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: mode

                }
            })
            player.srcObject = x
        } catch (error) {
            console.log(error);
        }

        document.getElementById("loader").innerHTML = ""
        startBtn.removeAttribute("disabled")
    } else {
        console.log("mediaDevices not supported");
    }
    switchBtn.classList.remove("d-none")
    captureBtn.classList.remove("d-none")
    closeBtn.classList.remove("d-none")
    player.classList.remove("d-none")
    startBtn.classList.add("d-none")

}