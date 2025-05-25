var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var mainContainer = document.querySelector(".mainContainer")
var card = document.querySelector(".card")

console.log("menuIcon", menuIcon);
menuIcon.onclick = function() {

    sidebar.classList.toggle("smaller-sidebar")
    mainContainer.classList.toggle("larger-mainContainer")
    card.classList.toggle("larger-card")
    console.log("menui con clicked");

}