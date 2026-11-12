let card= document.querySelectorAll(".place-card");
let popup = document.getElementById("popup");

card.forEach(function(card){
    let details_btn =card.querySelector(".details-btn");
    
    details_btn.addEventListener("click",function(event){
        event.preventDefault();
        let display = window.getComputedStyle(popup).display;

        if (display === "none") {
            popup.style.display = "flex";
        }
        let close_btn = document.getElementById("closebtn");
        close_btn.addEventListener("click",function(event){
            popup.style.display ="none";
        });
    });
});

let mainImage = document.querySelector(".main-image img");

let subImages = document.querySelector(".sub-image");

subImages.addEventListener("click", function(event) {

    if (event.target.tagName === "IMG") {

        let temp = mainImage.src;

        mainImage.src = event.target.src;

        event.target.src = temp;

    }

});