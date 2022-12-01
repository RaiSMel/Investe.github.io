// chave de acesso do banco de dados do firebase

const firebaseConfig = {
  
};

// gs://etec-65b6d.appspot.com/12.png

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const idUsuario = '';

const logout = () => {
    firebase
        .auth()
        .signOut()
        .catch(
       function (error) {
            console.error(error);
        });
}

const autenticar = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user){
            window.location.replace("login.html");
        }
        // usuario nao esta logado..
        
    });
}

const autenticarDeslogado = () =>{
    firebase.auth().onAuthStateChanged((user) => {
        if (user){
            sessionStorage.clear();
            window.location.replace('home.html');
        }})
}

const funcoes = {
   'app': app,
   'db': db, 
   'logout': logout,
   'autenticar': autenticar,
   'autenticarDeslogado': autenticarDeslogado
}
export default funcoes;

// console.log(user.uid)