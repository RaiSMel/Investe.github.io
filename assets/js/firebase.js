// chave de acesso do banco de dados do firebase

const firebaseConfig = {
    apiKey: "AIzaSyAE9qr2O_bdBkXtFXOqrwb4QA0TZ0kvZo4",
    authDomain: "etec-65b6d.firebaseapp.com",
    databaseURL: "https://etec-65b6d-default-rtdb.firebaseio.com",
    projectId: "etec-65b6d",
    storageBucket: "etec-65b6d.appspot.com",
    messagingSenderId: "836178425726",
    appId: "1:836178425726:web:98940b16a8252bf54e652f",
    measurementId: "G-5R02JZ6LLZ"
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

const verificarPerfil = () => {


        firebase.auth().onAuthStateChanged(async (user) => {
    
            
    
            const usuario = await db.collection("usuarios")
            .where("id", "==", `${user.uid}`).get().then(usuarios => {
                
                usuarios.forEach(usuarioConfig => {
                    

                if(usuarioConfig.data()['perfilInvestidor'] == undefined)
                {
                    document.location.href = 'cursos.html'
                }
            });
        }).catch((error) => {
            console.error(error)
        })

})}

const verificarPago = () => {

}

const funcoes = {
   'app': app,
   'db': db, 
   'logout': logout,
   'autenticar': autenticar,
   'autenticarDeslogado': autenticarDeslogado,
   'verificarPerfil': verificarPerfil
}
export default funcoes;

// console.log(user.uid)