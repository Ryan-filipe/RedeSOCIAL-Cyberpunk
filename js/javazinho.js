let posts = [
  {
    autor: "LOREM323",
    texto: "WHATT??BUGS",
    curtidas: 0
  },
  {
    autor: "LOREM333",
    texto: "Que jogo insano",
    curtidas: 0
  }
]

const autores = posts.map(post => post.autor);
const textos = posts.map(post => post.texto);

const resumos = posts.map(post => `${post.autor} disse: ${post.texto} (${post.curtidas} curtidas)`);

const feed = document.querySelector("#feed")

function renderizaFeed() {
  feed.innerHTML = posts.map(post => `
   
<article>
   <h2>${post.autor}</h2>
   <p>${post.texto}</p>
   <span>${post.curtidas}</span>
   <button class="btn-curtir">Curtir</button>
</article>
`).join("");
  const botoes = document.querySelectorAll(".btn-curtir");

  botoes.forEach((botao, posicao) => {
    botao.addEventListener("click", () => {
      posts[posicao].curtidas = posts[posicao].curtidas + 1;
      localStorage.setItem("posts", JSON.stringify(posts));
      renderizaFeed();
    })
  })
}
const salvos = localStorage.getItem("posts");

if (salvos) {
  posts = JSON.parse(salvos);
}
renderizaFeed();

const novoTexto = document.querySelector("#novo-texto");
const botaoPostar = document.querySelector("#postar");

botaoPostar.addEventListener("click", () => {
  if (novoTexto.value.trim() !== "") {
    const novoPost = {
      autor: "RyanFilipe",
      texto: novoTexto.value,
      curtidas: 0
    };

    posts.unshift(novoPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    renderizaFeed();
    novoTexto.value = "";
  }
});

let usuarios = [
  { nome: "CyberGhost", arroba: "@cyberghost", seguindo: false },
  { nome: "NetrunnerBR", arroba: "@netrunnerbr", seguindo: false },
  { nome: "NightCityNews", arroba: "@nightcitynews", seguindo: false }
];

const sugestoes = document.querySelector("#sugestoes");

function renderizaSugestoes() {
  sugestoes.innerHTML = usuarios.map(usuario => `
<div class="sugestao">
   <div class="info">
      <strong>${usuario.nome}</strong>
      <span>${usuario.arroba}</span>
   </div>
   <button class="btn-seguir">${usuario.seguindo ? "Seguindo" : "Seguir"}</button>
</div>
`).join("");

  const botoesSeguir = document.querySelectorAll(".btn-seguir");

  botoesSeguir.forEach((botao, posicao) => {
    botao.addEventListener("click", () => {
      usuarios[posicao].seguindo = !usuarios[posicao].seguindo;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      renderizaSugestoes();
    });
  });
}
const usuariosSalvos = localStorage.getItem("usuarios");

if (usuariosSalvos) {
   usuarios = JSON.parse(usuariosSalvos);
}


renderizaSugestoes();