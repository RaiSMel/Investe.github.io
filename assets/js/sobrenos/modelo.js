import ModeloPessoa from "./modeloPessoa.js"; 

const botaoVerMais = document.querySelectorAll(".botao__ver-mais");
const modelo = document.querySelector(".modelo");
const botaoFechar = document.querySelector('.modelo-sair');




botaoVerMais.forEach(botao => {
  botao.addEventListener('click', (evento) => {
    let id = ModeloPessoa[evento.target.parentElement.id];

    let imgPerfil = `<img class='modelo__img-perfil' src='${id.imgPerfil}' alt='${id.nome}'/>`;
    let nome = document.createElement('h3');
    let cargo = document.createElement('p');
    let descricao = document.createElement('p');
    let imgSkills = `<img class='modelo__imgs' src='${id.graficoSkills}' alt='Skills ${id.nome}'/>`;
    let imgHobbies = `<img class='modelo__imgs' src='${id.graficoHobbies}' alt='Hobbies ${id.nome}'/>`;


    nome.classList.add('modelo__nome');
    cargo.classList.add('modelo__cargo');
    descricao.classList.add('modelo__descricao');

    nome.innerHTML = id.nome;
    cargo.innerHTML = id.cargo;
    descricao.innerHTML= id.descricao;
    
    modelo.style.display = 'flex';

    modelo.innerHTML += imgPerfil;
    modelo.appendChild(nome);
    modelo.appendChild(cargo);
    modelo.appendChild(descricao);
    modelo.innerHTML += imgSkills;
    modelo.innerHTML += imgHobbies;



  });
});


const sairPerfil = () => {
  modelo.innerHTML = "<div class='modelo-sair'>X</div>";
  modelo.style.display = "none";
};


modelo.addEventListener('click', sairPerfil)

