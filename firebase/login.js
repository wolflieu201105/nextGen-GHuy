import { auth } from "./config.js";
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const alertText = document.getElementById("alert-text")

const handleLogin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.replace("/index.html");
        })
        .catch((error) => {
            alert(error.code)
            if(error.code == "auth/invalid-email"){
                alertText.innerText = "Invalid Email!";
                alertText.style.display = "block";
            }
            if(error.code == "auth/missing-password"){
                alertText.innerText = "Missing Password!";
                alertText.style.display = "block";
            }
            if(error.code == "auth/user-not-found"){
                alertText.innerText = "User not found!";
                alertText.style.display = "block";
            }
            if(error.code == "auth/wrong-password"){
                alertText.innerText = "Wrong password!";
                alertText.style.display = "block";
            }
        });
}

loginBtn.addEventListener('click', handleLogin)