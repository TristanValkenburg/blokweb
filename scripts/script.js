// JavaScript Document

//bron 18, 19, 20, 21, 22 en 23
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let price = document.getElementById("price")

let notification1 = document.getElementById("notification1")
let notification2 = document.getElementById("notification2")

option1.addEventListener("click", expandOption1)
option2.addEventListener("click", expandOption2)

function expandOption1(){
    if(!option1.classList.contains("expanded")){
        option1.classList.add("expanded")
        option2.classList.remove("expanded")
        price.innerText = "€ 125,99";
        notification1.play();
    } else {
        notification2.play()
    }
}


function expandOption2(){
    if(!option2.classList.contains("expanded")){
        option2.classList.add("expanded")
        option1.classList.remove("expanded")
        price.innerText = "€ 82,99"
        notification1.play()
    } else {
        notification2.play()
    }
}