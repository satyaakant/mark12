const inputAngle = document.querySelectorAll(".angle-input");
const btn = document.querySelector("#check-btn");
const outputText = document.querySelector("#output");

btn.addEventListener("click" ,  isTriangle);
function isTriangle(){
    const sumOfangle=sumCalculator(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
    if(sumOfangle===180){
        outputText.innerText="Yay angle you entered form a Triangle";
    }
    else{
        outputText.innerText="oh oh! angle you entered do not form a Triangle";
    }
}
function sumCalculator(angle1,angle2,angle3){
    const sumOfangle=angle1+angle2+angle3;
    return sumOfangle;
}