let mensWearEl=document.getElementById("mensWear");
let womensWearEl=document.getElementById("womensWear");
let kidsWearEl=document.getElementById("kidsWear");
let cartItemEl=document.getElementById("cartItem");
let productsHeadingEl=document.getElementById("productsHeading");
let productsPageEl=document.getElementById("productsPage");

function myScript(){
    productsHeadingEl.textContent="Mens wear";
    console.log("hello")
}

mensWearEl.addEventListener("click", myScript);
console.log(document.getElementById("productsHeading").innerHTML="hello");