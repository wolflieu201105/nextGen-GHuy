const cartItem = document.getElementById("add-in");

const addItem = () => {
    item = cartItem.getAttribute("name");
    localStorage.setItem(item, Number(localStorage.getItem(item)) + 1);
}