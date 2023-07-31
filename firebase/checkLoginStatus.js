import { auth } from "./config.js";
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'

const checkLoginStatus = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.providerData[0]);
            if (location.pathname === "/login.html" || location.pathname === "/register.html") {
                window.location.replace("index.html")
            }
            else if (location.pathname === "/index.html" || location.pathname.slice(-8) === "enu.html") {
                const AuthBtn = document.getElementById("Auth-btn");
                AuthBtn.textContent = "Logout";
                const welcomeText = document.getElementById("welcome-text");
                const profile = user.providerData[0];
                welcomeText.textContent = "xin chào " + profile.email;
            }
        }
        else {
            if (location.pathname === "/index.html" || location.pathname.slice(-8) === "enu.html") {
                const AuthBtn = document.getElementById("Auth-btn");
                AuthBtn.textContent = "Login";
            }
        }
    });
}

export { checkLoginStatus }