import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn = document.getElementById("register-btn");
const alertText = document.getElementById("alert-text");

const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(user.email);
            window.location.replace("/login.html");
        })
        .catch((error) => {
            if(error.code == 'auth/invalid-email') {
                alertText.style.display = "block";
                alertText.innerText = 'Email không hợp lệ!';
            }else if(error.code == "auth/missing-password"){
                alertText.style.display = "block";
                alertText.innerText = "Chưa nhập mật khẩu!";
            }else if(error.code == "auth/weak-password"){
                alertText.style.display = "block";
                alertText.innerText = "Mật khẩu yếu!";
            }else if(error.code == "auth/email-already-in-use"){
                alertText.style.display = "block";
                alertText.innerText = "Email đã được sử dụng!";
            }
        });
}

registerBtn.addEventListener('click', handleRegister)