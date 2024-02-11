firebaseConfig = {
    apiKey: "AIzaSyBUtux__In3bZ4kJITr2xeLFs9CAdgBEZI",
    authDomain: "new-food-c430f.firebaseapp.com",
    databaseURL: "https://new-food-c430f-default-rtdb.firebaseio.com",
    projectId: "new-food-c430f",
    storageBucket: "new-food-c430f.appspot.com",
    messagingSenderId: "41890507864",
    appId: "1:41890507864:web:621d9cd8ac0f69c2e62e2d"
  };


firebaseConfig = {
    apiKey: "AIzaSyBUtux__In3bZ4kJITr2xeLFs9CAdgBEZI",
    authDomain: "new-food-c430f.firebaseapp.com",
    databaseURL: "https://new-food-c430f-default-rtdb.firebaseio.com",
    projectId: "new-food-c430f",
    storageBucket: "new-food-c430f.appspot.com",
    messagingSenderId: "41890507864",
    appId: "1:41890507864:web:621d9cd8ac0f69c2e62e2d"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)'>#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirecToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function addRoom(){

room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = kwitter.HTML ;
};

function Send()
{
msg=document.getElementById("msg").value;
firebase.database().ref("room_name").push({
name:user_name ,
like:0 ,
message:msg ,
});
document.getElementById("msg").value="" ;
function redirectToRoomNam(name) {
console.log(name);
localStorage.setItem("room_name",name)
window.location ="chat_page.html";
}

} } });  }); }
getData();
