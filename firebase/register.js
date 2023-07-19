import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn = document.getElementById("register-btn");
const errorMessage = document.getElementById("error-message")

const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(user.email);
            window.location.replace("/login.html");
        })
        .catch((error) => {
            alert(error.code)
            if(error.code == 'auth/invalid-email') {
                errorMessage.innerHTML = 'Email không hợp lệ'
            }else if(error.code == "auth/missing-password"){
                errorMessage.innerHTML = "Chưa nhập mật khẩu"
            }else if(error.code == "auth/weak-password"){
                errorMessage.innerHTML = "Mật khẩu yếu"
            }else if(error.code == "auth/email-already-in-use"){
                errorMessage.innerHTML = "email đã được sử dụng"
            }
        });
}

registerBtn.addEventListener('click', handleRegister)