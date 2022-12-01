import funcoes from '../firebase.js';
import criarCursosIniciados from './criarItens.js';

const db = funcoes['db']

const idCurso = async () => {

    firebase.auth().onAuthStateChanged(async (user) => {

        const materiasIniciadas = await db.collection("materiasInciadas").where('usuario', '==', `${user.uid}`).get();
        materiasIniciadas.forEach(async (doc) => {
            const materiasIniciadas = await db.collection("Materias").where('id', '==', `${doc.data()['id']}`).get();
            materiasIniciadas.forEach((materia) => {

                criarCursosIniciados(
                    materia.data()['id'],
                    materia.data()['imagemMateria'],
                    materia.data()['titulo'])
            })


        });
    })


}







const metodos = {
    'idCurso': idCurso
}

export default metodos;