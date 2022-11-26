import '../firebase.js';

const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const confirmarSenha = document.querySelector('#confirmarSenha');
const botaoCadastrar = document.querySelector('.botaoCadastrar');
const errosPagina = document.querySelector('.erros');

const errosPossiveis = {
    'senhaIguais': 'As senhas deve coincindir, tendo ao menos 6 caracteres',
    'auth/invalid-email': 'O email não é valido, use o padrão exemplo@email.com',
    'auth/weak-password': 'A senha deve conter no minimo 6 caracteres',
    'auth/email-already-in-use': 'O email já está sendo usado'
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

const criarUsuario = () => {
    

    botaoCadastrar.addEventListener('click', (evento) => {
        evento.preventDefault();
        limparErros()
       
 

        if ((senha.value == confirmarSenha.value) && senha.value != "" ) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, senha.value)
                .catch(function (error) {
                    console.error(error.code)
                    colocarErros(error.code);
                })
        } else {
            let erros = JSON.parse(localStorage.getItem('erros')) || [];
            if (!erros.includes('senhaIguais')) {
                erros.push('senhaIguais');
                localStorage.setItem('erros', JSON.stringify(erros));
            }
        }
        setTimeout(mostrandoErros, 200);
    })

}




export default criarUsuario;