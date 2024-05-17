const firebaseConfig = {
    apiKey: "AIzaSyDH5nEUbb8pb3Y9u7_PSCy4EcdZEI6yMaQ",
    authDomain: "checklist-9492d.firebaseapp.com",
    databaseURL: "https://checklist-9492d-default-rtdb.firebaseio.com",
    projectId: "checklist-9492d",
    storageBucket: "checklist-9492d.appspot.com",
    messagingSenderId: "777475427745",
    appId: "1:777475427745:web:bc52148c13d8d513d94fe0",
    measurementId: "G-MLZJ87ELCX"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addItem(){
    item = document.getElementById('text').value;
    firebase.database().ref("/").child(item).update({
        purpose: "Adding item."
    });
    getItem();
  }

  function getItem(){
    firebase.database().ref("/").on('value', function(snapshot) { 
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        item = childKey;
        row = "<div>#" + item + "</div><hr>"; 
        document.getElementById('output').innerHTML = row;
        });
    });
  }