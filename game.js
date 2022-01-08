let currentTime = 60;
let score = 0;
let questionPlace = document.getElementById("question-text");
let timer = document.getElementById("timer-second");
let answerInput = document.getElementById("answerInput");
let update = document.getElementById("liveScore");
let answer ;


document.addEventListener("keypress" , checkAnswer);
generateQuestion();
timerFunction();

document.getElementById("nextBtn").addEventListener("click" , function(){
    generateQuestion();
});

function updateScore(val){
    let Upd = "Score : ";
    Upd += val;
    update.innerText = Upd; 
}

function timerFunction(){
    if(currentTime == 0){
        console.log("zero");
        localStorage.setItem("score" , score);
        let getScore = localStorage.getItem("score");
        console.log(getScore);
        window.location.href = "game-over.html" ;
        return ;
    }
    setTimeout(() => {
        currentTime--;
        timer.innerText = currentTime
        timerFunction();
    }, 1000);
}

function generateQuestion(){
    let operation = ["+" , "-" , "x" , "/" , "%"];
    let randomIndex = Math.ceil(Math.random()*5);
    console.log(randomIndex);

    let num1 , num2;
    num1 = Math.ceil(Math.random()*100);
    num2 = Math.ceil(Math.random()*100);

    let op = operation[randomIndex - 1];
    if(op == "+"){
        answer = num1 + num2 ;
    }
    else if(op == "-"){
        if(num1 < num2){
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        answer = num1 - num2;
    }
    else if(op == 'x'){
        num1 = (num1%10) + 1;  
        num2 = (num2%10) + 1;  
        answer = num1 * num2;
    }
    else if(op == '/'){
        num2 = (num2%10) + 1;  
        let randomDivisor = Math.ceil(Math.random()*10);
        num1 = num2 * randomDivisor;
        answer = randomDivisor;
    }
    else if(op == '%'){
        num2 = (num2%5) + 1;
        answer = num1 % num2 ;
    }

    let question = "";
    question += num1;
    question += op;
    question += num2;
    console.log(question);
    console.log(answer);

    questionPlace.innerText = question;   
}

function checkAnswer(data){
    console.log(data.key);
    if(data.key == "Enter"){
        let userAnswer = answerInput.value ;
        answerInput.value = "";
        console.log(userAnswer);
        if(userAnswer == answer){
            score+=3;
            updateScore(score);
            console.log("correct");
            generateQuestion();
        }
        else{
            score--;
            updateScore(score);
            console.log("In-correct");
        }
    }
    else if(data.key == " "){
        answerInput.value = "";
        generateQuestion();
    }
}