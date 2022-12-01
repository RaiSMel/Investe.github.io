const cursosDisponiveis = document.querySelector('.disponiveis__items');



const criarCursosDisponiveis = async (id, imgUrl, nome) => {

    cursosDisponiveis.innerHTML += `<a href="curso.html${id}" class="disponiveis__item">
                <img src="${imgUrl}" class="disponiveis__item-img"></div>${nome}
            </a>`;

}

export default criarCursosDisponiveis;