import firebase from "firebase/app";

import "firebase/firestore";

const config  = {
    apiKey: "AIzaSyCGug9jzK2gbNifPHxVrNIdWTPS5l-g3A0",
    authDomain: "ecommerce-magios-team.firebaseapp.com",
    projectId: "ecommerce-magios-team",
    storageBucket: "ecommerce-magios-team.appspot.com",
    messagingSenderId: "546239379712",
    appId: "1:546239379712:web:a075d4a3fafd585a7c1be5",
};

//Esta funcion me da una instancia de la App ya inicializada
const app = firebase.initializeApp(config)


// Esta funcion me da una instancia de Firestore
//export const firestore = firebase.firestore(App)

export const getFirestore = () => {
    return firebase.firestore(app)
}

export default firebase