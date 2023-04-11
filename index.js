let homeScore = 0
let guestScore = 0

document.getElementById("home-score").innerText = homeScore
document.getElementById("guest-score").innerText = guestScore

function add1Home(){
    document.getElementById("home-score").innerText = homeScore += 1
}
function add2Home(){
    document.getElementById("home-score").innerText = homeScore += 2
}
function add3Home(){
    document.getElementById("home-score").innerText = homeScore += 3
}
function add1Guest(){
    document.getElementById("guest-score").innerText = guestScore += 1
}
function add2Guest(){
    document.getElementById("guest-score").innerText = guestScore += 2
}
function add3Guest(){
    document.getElementById("guest-score").innerText = guestScore += 3
}   
