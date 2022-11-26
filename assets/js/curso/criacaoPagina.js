import itens from './firestoreCRUD.js';

const identificacao = document.querySelector('.identificacao');
const instrutor = document.querySelector('.instrutor');
const inscreverSe = document.querySelector('.inscrever')
const videoContainer = document.querySelector('.video-container');
const materiais = document.querySelector('.materiais');
const atividade = document.querySelector('.atividades');
const Modulos = [];
const exercicios = [];


let conteudo
let professor 


const criarPagina = (objeto) => {

    objeto.then(res => {

        let item = res[0]
        conteudo = item['conteudo']
        professor = item['professor']
        
        let modulos = conteudo['Modulos'];
        Object.keys(modulos).forEach(ab => {
            Modulos.push(ab)
            exercicios.push(modulos[ab])
        });

        itens['verificar']().then(res => {
    
            identificacao.innerHTML = `<h2 class="titulo">Curso sobre</h2>
            <img src="${conteudo['imagemMateria']}"
            alt="${conteudo['titulo']} ilustração" class="curso-img">
            <h3 class="titulo identificacao-titulo">${conteudo['titulo']}</h3>
            <p class="identificacao__texto">${conteudo['introducao']}</p>`;
            
            instrutor.innerHTML = `<h2 class="titulo">Professor</h2>
            <img src="${professor['srcImg']}"
            alt="${professor['professor']}" class="curso-img">
            <h2 class="instrutor-nome">${professor['professor']}</h2>
            <p class="instrutor-texto">${professor['sobre']} </p>`;
            if(!res){
                inscreverSe.addEventListener('click', () => { itens['inscreverSe']()})
            }
            
            if(res){
                inscreverSe.classList.add('displayNone')
                
                videoContainer.classList.remove('displayNone');
                materiais.classList.remove('displayNone');

                videoContainer.innerHTML = `<iframe class="video borda-preta" src="${conteudo['video']}" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
                
                
                materiais.innerHTML = `
                <h2 class="titulo">Matériais de aula</h2>
                <ol class="modulos">
                <li class="modulo">
                <p class="modulo-titulo">${Modulos[0]}</p>
                </li>
                <li class="modulo">
                <p class="modulo-titulo">${Modulos[1]}</p>
                </li>
                <li class="modulo">
                <p class="modulo-titulo">${Modulos[2]}</p>
                </li>
                </ol>`


            }
            
            
        })
                

        });

}


// criar escuta para a página

const escutarPagina = () => {

    const modulo = document.querySelectorAll('.modulos');
    let count = 0;
    
    modulo.forEach(modulo2 => {

        
        modulo2.addEventListener('click', (evento) => {

            Object.keys(Modulos).forEach(key => {

                if(Modulos[key] == evento.target.innerHTML ){
                    count = key;
                }
            })
                atividade.classList.remove('displayNone');
                atividade.innerHTML = exercicios[count]

        })
    })


}

const criacao = {
    'criarPagina': criarPagina,
    'escutarPagina': escutarPagina
}
export default criacao;