import { auth } from "./config.js";
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const alertText = document.getElementById("alert-text");

const handleLogin = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.clear();
            localStorage.setItem("sportMenu", 0);
            localStorage.setItem("balancedMenu", 0);
            localStorage.setItem("muscleGainMenu", 0);
            localStorage.setItem("officeMenu", 0);
            localStorage.setItem("slimmingMenu", 0);
            localStorage.setItem("vegetarianMenu", 0);
            window.location.replace("/index.html");
        })
        .catch((error) => {
            if(error.code == "auth/invalid-email"){
                alertText.innerText = "Email không hợp lệ!";
                alertText.style.display = "block";
            }
            if(error.code == "auth/missing-password"){
                alertText.innerText = "Chưa nhập mật khẩu!";
                alertText.style.display = "block";
            }
            if(error.code == "auth/user-not-found"){
                alertText.innerText = "Tải khoản không tồn tại!";
                alertText.style.display = "block";
            }
            if(error.code == "auth/wrong-password"){
                alertText.innerText = "Sai mật khẩu!";
                alertText.style.display = "block";
            }
        });
}

loginBtn.addEventListener('click', handleLogin)