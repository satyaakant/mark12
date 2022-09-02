const quizForm = document.querySelector(".Quiz-form");
const submitAnswer = document.querySelector("#btn-submit");
const outputle = document.querySelector("#output");

const correctAnswer = ["75°","Right Angled","Equilateral Triangle","180°"];

function calculateScore(){
    let score =0;
    let index =0;
    const formResults = new FormData(quizForm);
    
    for(let value of formResults.values()){
       if(value === correctAnswer[index]){
        score++ ;
       }
       index++ ;
    }
    outputle.innerText="Your score is " + score;
}

submitAnswer.addEventListener('click',calculateScore);