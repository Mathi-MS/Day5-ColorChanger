//declare variable
var clickme = document.getElementById("clickme")
var colorchange = document.getElementById("colorchange")
var change = document.querySelector(".change")

clickme.addEventListener("click",function () {
    
var randomgenerator = Math.ceil(Math.random()*10);
console.log(randomgenerator);
if(randomgenerator == 1){
    colorchange.textContent="red"
    change.style.background="red"
}
else if(randomgenerator == 2){
    colorchange.textContent="green"
    change.style.background="green"
}
else if(randomgenerator == 3){
    colorchange.textContent="blue"
    change.style.background="blue"
}
else if(randomgenerator == 4){
    colorchange.textContent="orangered"
    change.style.background="orangered"
}
else if(randomgenerator == 5){
    colorchange.textContent="purple"
    change.style.background="purple"
}
else if(randomgenerator == 6){
    colorchange.textContent="peru"
    change.style.background="peru"
}
else if(randomgenerator == 7){
    colorchange.textContent="yellowgreen"
    change.style.background="yellowgreen"
}
else if(randomgenerator == 8){
    colorchange.textContent="yellow"
    change.style.background="yellow"
}
else if(randomgenerator == 9){
    colorchange.textContent="palevioletred"
    change.style.background="palevioletred"
}
else {
    colorchange.textContent="turquoise"
    change.style.background="turquoise"
}
})
