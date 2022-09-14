const sides = document.querySelectorAll(".side-input");
const areanBtn = document.querySelector("#area-btn");
const area = document.querySelector("#output");

areanBtn.addEventListener('click' ,calculatearea);
function calculatearea(){
    
   
    const product = productHandler(Number(sides[0].value),Number(sides[1].value));
    if(product==0){
        area.innerText="Entering number is least that we asked you to do:( "
    }
    else{
    area.innerText="area of triangle is " + product
    }
    
}
function productHandler(a,b){
    const product=a*b/2;
    return product
}