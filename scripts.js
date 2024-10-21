

let botaoSom = document.querySelector(".som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

// ligar o som

botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted = false
}

// mostrar modal

botao.addEventListener("click", mostrarModal)

function mostrarModal(){
    modal.style.display = "block"
}