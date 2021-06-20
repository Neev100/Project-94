
var firebaseConfig = {
      apiKey: "AIzaSyD5eXycvWobKYNOYK_a39obs11qSnxi3cA",
      authDomain: "kwitter-15874.firebaseapp.com",
      databaseURL: "https://kwitter-15874-default-rtdb.firebaseio.com",
      projectId: "kwitter-15874",
      storageBucket: "kwitter-15874.appspot.com",
      messagingSenderId: "894001221615",
      appId: "1:894001221615:web:10d35ceb3590448c4df01a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  function adduser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
