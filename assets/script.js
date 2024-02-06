let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let caroussel1 = document.querySelector(".caroussel-1");
let listHTML = document.querySelector(".caroussel-1 .list");

// console.log(caroussel1)


nextButton.addEventListener("click",()=>{
    // console.log(nextButton);    
    showSlider("next");
});
prevButton.addEventListener("click",()=>{
    showSlider("prev");
});



let unAcceptClick;
const showSlider = (type) => {


    nextButton.style.pointerEvents="none";
    prevButton.style.pointerEvents="none";

    caroussel1.classList.remove("prev","next");
    let items = document.querySelectorAll(".caroussel-1 .list .item");
    if(type==="next"){
        listHTML.appendChild(items[0]);
        caroussel1.classList.add("next");
    }
    else{
        let positionLast = items.length-1;
        listHTML.prepend(items[positionLast]);
        caroussel1.classList.add("prev");
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(()=>{
        nextButton.style.pointerEvents="auto";
        prevButton.style.pointerEvents="auto";
    },2000)
}
