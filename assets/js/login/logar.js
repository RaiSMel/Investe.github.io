const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const logarBotao = document.querySelector('.logarBotao')
const errosPagina = document.querySelector('.erros')

const errosPossiveis = {
    'auth/user-not-found': 'O usuário/senha é invalido',
    'auth/invalid-email': 'O email colocado é invalido',
    'auth/user-not-found': 'O usuário/senha é invalido',
    'auth/wrong-password': 'O usuário/senha é invalido'
}


const colocarErros = (erro) => {

    let erros = JSON.parse(localStorage.getItem('erros')) || [];
    if (!erros.includes(erro)) {
        erros.push(erro);
    }
    localStorage.setItem('erros', JSON.stringify(erros));
}

const limparErros = () => {
    localStorage.removeItem('erros');
    errosPagina.innerHTML = "";
}

const mostrandoErros = () => {
    let erros = JSON.parse(localStorage.getItem('erros')) || [];
    errosPagina.classList.remove('displayNone');
    erros.forEach(erro => {
        errosPagina.innerHTML += `-${errosPossiveis[erro]}<br>`;
    });

}

const logar = () => {
    

    logarBotao.addEventListener('click', (evento) => {
        evento.preventDefault();

        limparErros()

        firebase.auth()
            .signInWithEmailAndPassword(email.value, senha.value)
            .catch((error) => {
                console.error(error.code)
                colocarErros(error.code);
                alert('Falha ao autenticar, verifique o erro no console.')
            });
        setTimeout(mostrandoErros, 200);
        sessionStorage.setItem('tentativa', JSON.stringify(firebase.auth().onAuthStateChanged(console.log(user))) )    

    })


}    


export default logar;