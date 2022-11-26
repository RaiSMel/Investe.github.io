import funcoes from "../firebase.js";
import criarUsuario from "./cadastrar.js";

if(sessionStorage.getItem('cursos') != null)
{
    sessionStorage.removeItem('cursos')
}

funcoes['autenticarDeslogado']();


criarUsuario();