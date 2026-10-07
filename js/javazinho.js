//const botaolike = document.querySelector("#curtir");

//const contadoRcurti = document.querySelector("#contador-curtidas");

//botaolike.addEventListener("click", () => {
   // posts[0].curtidas = posts[0].curtidas + 1;
   // contadoRcurti.textContent = posts[0].curtidas;
//});

const posts = [
{
autor:"LOREM323",
texto:"WHATT??BUGS",
curtidas:0
},
{
autor:"LOREM333",
texto:"Que jogo insano",
curtidas:0
}
]

const autores = posts.map(post => post.autor);
const textos= posts.map(post => post.texto);

const resumos = posts.map(post =>`${post.autor} disse: ${post.texto} (${post.curtidas} curtidas)`);

const feed = document.querySelector("#feed")

function renderizaFeed(){
feed.innerHTML = posts.map(post =>`
   
<article>
   <h2>${post.autor}</h2>
   <p>${post.texto}</p>
   <span>${post.curtidas}</span>
   <button class="btn-curtir">Curtir</button>
</article>
`).join("");
const botoes = document.querySelectorAll(".btn-curtir");

botoes.forEach((botao, posicao)=>{
    botao.addEventListener("click",()=>{
    posts[posicao].curtidas = posts[posicao].curtidas + 1;
    renderizaFeed();
    })
})
}
renderizaFeed();



