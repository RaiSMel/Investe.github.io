import funcoes from "../firebase.js";
import criarCursosIniciados from "./criarItens.js";
import metodos from "./firestoreCRUD.js";

metodos['idCurso']();
funcoes['autenticar']();


setTimeout(metodos['devolverCursos'], 400)

setTimeout(criarCursosIniciados, 3000);
