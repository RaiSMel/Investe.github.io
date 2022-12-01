
const cursosIniciados = document.querySelector('.iniciados__items');

const criarCursosIniciados = async (id, imgUrl, nome) => {


             cursosIniciados.innerHTML +=    `<a href="curso.html${id}" class="cursos__iniciados-item">
                <img src="${imgUrl}" class="item-img">${nome}
            </a>`;

}

export default criarCursosIniciados;

