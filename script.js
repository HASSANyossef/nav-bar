let linkList = document.querySelector(".links ul");
let navContainer = document.querySelector(".nav-container");
let list = document.querySelector(".list");


list.addEventListener("click", function ()
{
    let i = list.classList.toggle("rotate");
    console.log(i);
    navContainer.classList.toggle("height");
    linkList.classList.toggle("show-links");
})