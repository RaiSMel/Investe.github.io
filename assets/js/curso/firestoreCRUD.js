import funcoes from "../firebase.js";

let user;
const inscreverSe = document.querySelector('.inscrever')
const db = funcoes['db'];
const regExp = /\#\w*/;
const curso = document.URL.match(regExp);
let verifica = false;

const conteudos = async () => {

    verificarCadastro()
            
        try {
            
            const variaveis = [];
            let itemConteudo, itemProfessor, nomeProfessor;
            
            const objeto = await db.collection("Materias").where('id', '==', `${curso}`).get();
            objeto.forEach(res => {
                
            itemConteudo = res.data()
            nomeProfessor = res.data()['professor']
        })
        
        const objetoProfessor = await db.collection("professores").where('professor', '==', `${nomeProfessor}`).get();
        objetoProfessor.forEach(res => {
            itemProfessor = res.data();
            
        })
        
        variaveis.push({
            'conteudo': itemConteudo,
            'professor': itemProfessor
        });
        
        return variaveis;
        
    } catch (error) {
        error;
    }
    
    
}

const verificarCadastro = async () => {


    const usuario = await firebase.auth().onAuthStateChanged(async (usuario) => {

        const itemVerificar = await db.collection("materiasInciadas").where("id", "==", `${curso[0]}`).where("usuario", "==", `${usuario.uid}`).get();
        itemVerificar.forEach(item =>{
            if((Object.keys(item.data()).length) > 0)
            verifica=true
        })
    })
    return verifica;
}

const inscreverCurso = async () => {
    
    const usuario = await firebase.auth().onAuthStateChanged(async (usuario) => {
        

        db.collection("materiasInciadas").add({
            id: `${curso[0]}`,
            usuario: `${usuario.uid}`
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
    })
}


const itens = {
    'conteudos': conteudos,
    'verificar': verificarCadastro,
    'inscreverSe': inscreverCurso
};

export default itens;








// db.collection("Materias").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {

//         Object.keys(doc.data()).forEach(keys =>{

//             console.log(doc.data()[keys])

//             if(doc.data().empty)
//             nomeProfessor = doc.data()['professor']

//         })

    
//     })
// })






// db.collection("Professores").get().then((querySnapshot) => {
//         querySnapshot.forEach(professor => {
//             console.log(professor.data())
//         })

// })

// const res = await db.collection('Professores').Document(idProfessor);
// console.log(res)

// db.collection("Materias").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data()['titulo']);
//         console.log(Date.parse(doc.data()['date'].toDate().toString()))
//         console.log(doc.data()['video']);
//     });
// });

