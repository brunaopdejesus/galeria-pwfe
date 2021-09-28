"use strict"

// vem de um banco de dados
const imagens = [
    "./img/img10.PNG",
    "./img/img2.PNG",
    "./img/img9.PNG",
    "./img/img4.PNG",
    "./img/img5.PNG",
    "./img/img6.PNG",
    "./img/img7.PNG",
    "./img/img8.PNG"
]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container");

    const novoLink = document.createElement("a");
    novoLink.href = urlImagem;
    novoLink.classList.add("galeria-itens");
    novoLink.innerHTML = `<img src="${urlImagem}">`;
    container.appendChild(novoLink);

    // container.innerHTML += `
    //     <a href="" class="galeria-itens">
    //         <img src="${urlImagem}">
    //     </a>
    // `
}

const carregarImagens = () => imagens.forEach(criarItem);

carregarImagens();