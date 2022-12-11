let navMenu = document.querySelector(".burger")
let sideMenu = document.querySelector(".sidebar")
navMenu.addEventListener("click", function () {
    sideMenu.classList.toggle("active")
})