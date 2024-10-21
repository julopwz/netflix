

let botaoSom = document.querySelector(".som")
let video = document.querySelector(".video")


botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted = false
}