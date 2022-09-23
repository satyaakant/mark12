const inputAngle = document.querySelectorAll(".angle-input");
const btn = document.querySelector("#check-btn");
const outputText = document.querySelector("#output");

function checkNegatives(){
    if (Number(inputAngle[0].value ==0) || Number(inputAngle[1].value ==0) || Number(inputAngle[2].value ==0)){
        output.innerText = "Please fill all the fields (non-zero)"
        inputAngle[0].placeholder = 0
        inputAngle[1].placeholder = 0
        inputAngle[2].placeholder = 0
    }else{
        if (Number(inputAngle[0].value)<0 || Number(inputAngle[1].value)<0 || Number(inputAngle[2].value)<0){
            output.innerText = "Angles can't be negative"
        }else{
            return "Positive"
        }
    }
}
btn.addEventListener("click" ,  isTriangle);
function isTriangle(){
    const checker = checkNegatives()
    if(checker=="Positive"){
    const sumOfangle=sumCalculator(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
    if(sumOfangle===180){
        outputText.innerText="Yay angle you entered form a Triangle";
    }
    else{
        outputText.innerText="oh oh! angle you entered do not form a Triangle";
    }
}
else{
    outputText.innerText="Wrong input";
}
}
function sumCalculator(angle1,angle2,angle3){
    const sumOfangle=angle1+angle2+angle3;
    return sumOfangle;
    
}