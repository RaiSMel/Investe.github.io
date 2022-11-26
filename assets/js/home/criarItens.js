
const cursosIniciados = document.querySelector('.iniciados__items');

let cursos = await JSON.parse(sessionStorage.getItem('cursos'));


const criarCursosIniciados = async () => {


    if(cursos != null){
        cursos.forEach(async (element) => {
             cursosIniciados.innerHTML +=    `<a href="curso.html${element[0]}" class="cursos__iniciados-item">
                <img src="${element[2]}" class="item-img"></div>${element[1]}
            </a>`;
        });
    }else{
        cursosIniciados.innerHTML += "<p style='margin: auto auto; font-size: 3rem;width: auto'>Você não está inscrito em nenhum curso ainda</p>"
    }
    

    
    





}

export default criarCursosIniciados;

