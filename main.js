//Login function
function Login(){
    //Sending username to LocalStorage and redirecting to main page
    username = document.getElementById("user_input").value;
    localStorage.setItem("Username", username);
    window.location = "letsChat.html";
}