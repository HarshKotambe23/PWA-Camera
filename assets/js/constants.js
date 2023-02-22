export const startBtn = document.getElementById("start")
export const captureBtn = document.getElementById("capture")
export const closeBtn = document.getElementById("close")
export const player = document.getElementById("player")
export const switchBtn = document.getElementById("switchCamera")
export const canvas = document.getElementById("canvas")
export const restartBtn = document.getElementById("restart")
let mode = "user"
export const getMode = () => {
    return mode
}
export const changeMode = (arg) => {

    mode = mode === "user" ? "environment" : "user"

}