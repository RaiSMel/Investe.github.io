import funcoes from "../firebase.js";
import criacao from "./criacaoPagina.js"
import itens from "./firestoreCRUD.js";

funcoes['autenticar']()

const verificador = /curso\.html\#/;
const url = document.URL
const principal = document.querySelector('.principal');




if(url.match(verificador)){

    const variavel = itens['conteudos']();
    
    setTimeout(criacao['criarPagina'](variavel));
    
    setTimeout(criacao['escutarPagina'], 1000);


}else{

    principal.innerHTML = `<h1 style="color:red; margin: auto; font-size:5rem">Algo deu errado</h1>`

}




