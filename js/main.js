
const menuBtn = document.getElementById("menu_btn")
const menu = document.getElementById("menu_mobile")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active")
})