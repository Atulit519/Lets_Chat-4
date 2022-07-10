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

username = localStorage.getItem("Username");
roomName = localStorage.getItem("Room_Name");

function Send(){
      msg = document.getElementById("send_input").value;
      firebase.database().ref(roomName).push({
            name: username,
            message: msg,
            like: 0
      });

      document.getElementById("send_input").value = "";
}

function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        

                        Uname = message_data["name"]
                        text = message_data["message"]
                        Likes = message_data["like"]

                        
                  }
            });
      });
}
getData();