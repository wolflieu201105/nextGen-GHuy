import { auth } from "./config.js";
import { signOut } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const logOutBtn = document.getElementById("Auth-btn");

const handleLogOut = () => {
    signOut(auth)
        .then(() => {
            window.location.replace('/login.html');
      })
        .catch((error) => {
            alert('error.code');
      });
}

logOutBtn.addEventListener('click', handleLogOut)