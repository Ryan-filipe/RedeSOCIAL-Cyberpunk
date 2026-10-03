const textoPost= document.querySelector("main article p")
textoPost.textContent = "um texto seu aqui";
console.log(textoPost)

const botaolike=document.querySelector("#curtir")

botaolike.addEventListener("click", ()=>{
    console.log("Like LIKe")
})