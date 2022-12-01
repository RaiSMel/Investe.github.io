import funcoes from '../firebase.js';
import criarCursosDisponiveis from './cursosDisponiveis.js';

const db = funcoes['db'];

const cursosDisponiveis = async () => {

    const materias = await db.collection("Materias").get();
    materias.forEach(arrays => {
        criarCursosDisponiveis( arrays.data()['id'],arrays.data()['imagemMateria'] ,arrays.data()['titulo'] )
        
        });

}

export default cursosDisponiveis;