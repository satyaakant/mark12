const inputE = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenus-btn");
const outputE = document.querySelector("#output");

function calculateHypoteneus(){
    const sumofSquare= calculateSumofSquare(Number(inputE[0].value),Number(inputE[1].value));
    const lengthOfhypotenues = Math.sqrt(sumofSquare);
    if(lengthOfhypotenues==0){
        outputE.innerText="Entering number is least that we asked you to do:( "
    }
    else
    outputE.innerText= "The Length of Hypotenuse is "+lengthOfhypotenues;
}
function calculateSumofSquare(a,b){
    const sumofSquare = a*a +b*b;
    return sumofSquare;
}
hypotenuseBtn.addEventListener('click',calculateHypoteneus);