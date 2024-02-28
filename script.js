function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}

// Configuración de Firebase (reemplaza con tu configuración)
const firebaseConfig = {
    apiKey: "AIzaSyBd7_YZfTNbyyKxFwzSV0dhdpYfPm6si40",
    authDomain: "amiegodemierda.firebaseapp.com",
    projectId: "amiegodemierda",
    storageBucket: "amiegodemierda.appspot.com",
    messagingSenderId: "825955580668",
    appId: "1:825955580668:web:2878f73c3ec02fd2bb3579"
  };
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function createGame() {
    var gameCode = document.getElementById('gameCode').value;
    if (gameCode.trim() !== "") {
        db.collection("games").doc(gameCode).set({
            // Puedes establecer aquí cualquier información inicial de la partida, como el timestamp
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function() {
            console.log("Partida creada con éxito!");
        })
        .catch(function(error) {
            console.error("Error al crear la partida: ", error);
        });
    }
}

function submitPhrase() {
    var gameCode = document.getElementById('gameCode').value;
    var userPhrase = document.getElementById('userPhrase').value;
    if (gameCode.trim() !== "" && userPhrase.trim() !== "") {
        db.collection("games").doc(gameCode).collection("phrases").add({
            phrase: userPhrase,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function() {
            console.log("Frase enviada correctamente!");
        })
        .catch(function(error) {
            console.error("Error enviando la frase: ", error);
        });
    }
}