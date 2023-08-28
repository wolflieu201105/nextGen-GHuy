if(localStorage.getItem("sportMenu") > 0){
    document.getElementById("sportMenu").style.display = "block";
    document.getElementById("sportMenuNumber").innerText = localStorage.getItem("sportMenu");
    document.getElementById("sportMenu").style.display = "flex";
}
if(localStorage.getItem("vegetarianMenu") > 0){
    document.getElementById("vegetarianMenu").style.display = "block";
    document.getElementById("vegetarianMenuNumber").innerText = localStorage.getItem("vegetarianMenu");
    document.getElementById("vegetarianMenu").style.display = "flex";
}
if(localStorage.getItem("slimmingMenu") > 0){
    document.getElementById("slimmingMenu").style.display = "block";
    document.getElementById("slimmingMenuNumber").innerText = localStorage.getItem("slimmingMenu");
    document.getElementById("slimmingMenu").style.display = "flex";
}
if(localStorage.getItem("officeMenu") > 0){
    document.getElementById("officeMenu").style.display = "block";
    document.getElementById("officeMenuNumber").innerText = localStorage.getItem("officeMenu");
    document.getElementById("officeMenu").style.display = "flex";
}
if(localStorage.getItem("muscleGainMenu") > 0){
    document.getElementById("muscleGainMenu").style.display = "block";
    document.getElementById("muscleGainMenuNumber").innerText = localStorage.getItem("muscleGainMenu");
    document.getElementById("muscleGainMenu").style.display = "flex";
}
if(localStorage.getItem("balancedMenu") > 0){
    document.getElementById("balancedMenu").style.display = "block";
    document.getElementById("balancedMenuNumber").innerText = localStorage.getItem("balancedMenu");
    document.getElementById("balancedMenu").style.display = "flex";
}


trash = (a) => {
    document.getElementById(a).style.display = "none";
    localStorage.setItem(a, 0);
}