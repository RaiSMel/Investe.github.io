import funcoes from "../firebase.js";
import criarCursosIniciados from "../home/criarItens.js";
import metodos from "../home/firestoreCRUD.js";

metodos['idCurso']();
funcoes['autenticar']();


setTimeout(metodos['devolverCursos'], 500)

setTimeout(criarCursosIniciados, 3000);
