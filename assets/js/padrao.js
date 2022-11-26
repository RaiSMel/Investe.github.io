import funcoes from "./firebase.js";

const menuNavegacao = document.querySelector('[data-menu-juncao]');
const menuSecao = document.querySelector('[data-menu-secao]');
const usuario = document.querySelector('#usuario');
const usuarioPainel = document.querySelector('.usuario_painel');
const logoutBotao = document.querySelector('.usuario_painel');


let ligaEDesliga = true;

menuNavegacao.addEventListener('click', (evento) => {
    
    document.body.style.overflow = ligaEDesliga ? "hidden" : "initial";
    
    menuSecao.classList.toggle('on', ligaEDesliga);
    ligaEDesliga = !ligaEDesliga;
    
})

if(usuario != null){

    let verificaUsuario = false;
    usuario.addEventListener('click', (evento) =>{
            usuarioPainel.classList.toggle('displayNone', verificaUsuario)
            verificaUsuario = !verificaUsuario;
    })


}

if(logoutBotao != null){
    logoutBotao.addEventListener('click', funcoes['logout'])
}
