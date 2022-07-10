const firebaseConfig = {
  apiKey: "AIzaSyDmLsApwYBeNz-fG0xSTGYnDvdx19JpsTI",
  authDomain: "lets-chat-52777.firebaseapp.com",
  databaseURL: "https://lets-chat-52777-default-rtdb.firebaseio.com",
  projectId: "lets-chat-52777",
  storageBucket: "lets-chat-52777.appspot.com",
  messagingSenderId: "292906594152",
  appId: "1:292906594152:web:58164b1416733f25b670dd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Displaying the Username on main screen
var username;
username = localStorage.getItem("Username");
document.getElementById("heading_span").innerHTML = username;

//Adding room
function Create() {
  room_name = document.getElementById("room_input").value;
  localStorage.setItem("RoomName", room_name);

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
  })
  window.location = "letsChat_room.html";
}

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("trending_rooms").innerHTML =  "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log(Room_names);

        row = "<div class = 'room_row' id = " + Room_names + " onclick = 'Redirect(this.id)'>" + Room_names + "</div> <hr class = 'room_hr'>";
        document.getElementById("trending_rooms").innerHTML += row;
      });
    });
}
getData();

function Redirect(Rooms){
  localStorage.setItem("RoomName", Rooms);
  window.location = "letsChat_room.html";
}

function Logout(){
  window.location = "index.html";
  localStorage.removeItem("Username");
  localStorage.removeItem("RoomName");
}