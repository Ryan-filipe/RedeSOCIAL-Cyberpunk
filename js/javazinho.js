const textoPost = document.querySelector("main article p");
textoPost.textContent = "um texto seu aqui";


const botaolike = document.querySelector("#curtir");


const contadoRcurti = document.querySelector("#contador-curtidas");

botaolike.addEventListener("click", () => {
    post.curtidas = post.curtidas + 1;
    contadoRcurti.textContent = post.curtidas;
});

const post = {
autor:"LOREM323",
texto:"WHATT??BUGS",
curtidas:0

}