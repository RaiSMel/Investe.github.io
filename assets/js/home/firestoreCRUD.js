import funcoes from '../firebase.js';
if(sessionStorage.getItem('cursos') != null)
{
    sessionStorage.removeItem('cursos')
}
const db = funcoes['db'];
const itens = JSON.parse(sessionStorage.getItem('cursos')) || [];


const idCurso = async () => {

    let idMaterias = [];

    firebase.auth().onAuthStateChanged(async (user) => {

        JSON.stringify('idUsuario', user.uid)

        const materiasIniciadas = await db.collection("materiasInciadas").where('usuario', '==', `${user.uid}`).get();

        materiasIniciadas.forEach(doc => {
            idMaterias.push(doc.data()['id'])
        })
        sessionStorage.setItem('cursosIniciados', JSON.stringify(idMaterias))
        return JSON.parse(sessionStorage.getItem('cursosIniciados'));
    }

    )

}
const cursosIniciados = async (idMateria) => {
    
        const Materias = await db.collection("Materias").where('id', '==', `${idMateria}`).get();
        Materias.forEach(materia => {
            itens.push([
                materia.data()['id'],
                materia.data()['titulo'],
                materia.data()['imagemMateria']])

                
            });
            
            sessionStorage.setItem('cursos', JSON.stringify(itens))
        
    
    return JSON.stringify(itens)

}


const devolverCursos = async () => {
    
    let objeto = await JSON.parse(sessionStorage.getItem('cursosIniciados'))
    
    await objeto.forEach(idMateria => {
            cursosIniciados(idMateria).then(a => {

            })    
    })
    
}

const metodos = {
    'idCurso': idCurso,
    'devolverCursos': devolverCursos,
    'cursosIniciados': cursosIniciados
}

export default metodos;