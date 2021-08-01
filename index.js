const chalk= require('chalk');
const readlineSync = require('readline-sync');

console.log("\n\nLet's find out how well you know me!!! 🙈\n");
const userName = readlineSync.question("❤ Please enter your name ❤\n");
console.log(`Hello, ${userName.toUpperCase()}👋\n`);

console.log("Enter a⎆ b⎆ c⎆ for each question to answer. For each correct answer you will get 2 points. \nTo cross level 1, answer correctly 2 out-off 3 questions. \nTo cross level 2, answer correctly 5 out-off 7 questions. \n\nGet Started With Level 1");

// variable declaration for score
let score = 0;

// defining all question-answers in object form
const question1 = {
    que: "What is my nickname?\na.sonu\nb.pinku\nc.nick\n",
    ans: "a",
    des: "Correct answer is a.sonu\n"
};
const question2 = {
    que: "Where do i live?\na.pune\nb.ahmednagar\nc.mumbai\n",
    ans: "b",
    des: "See you forgot it again. I live in Ahmednagar.\n"
};
const question3 = {
    que: "Which degree am i pursuing?\na.mcs\nb.bba\nc.cse\n",
    ans: "c",
    des: "I am pursuing computer science engineering(cse).\n"
};
const question4 = {
    que: "Which programming language do i like?\na.java\nb.javascript\nc.python\n",
    ans: "b",
    des: "I like javascript😍\n"
};
const question5 = {
    que: "Which movie do i like?\na.3-idiots\nb.Dead Silence\nc.Annabelle\n",
    ans: "a",
    des: "I don't watch hollywood movie, correct ans is a.3-idiots\n"
};
const question6 = {
    que: "Which color do i like?\na.red\nb.black\nc.green\n",
    ans: "b",
    des: "I like black color\n"
};
const question7 = {
    que: "Which food i like the most?\na.Pav Bhaji\nb.Pani Puri\nc.Noodles\n",
    ans: "b",
    des: "I love all those items. But Pani Puri wins😋\n"
};
const question8 = {
    que: "What is my birth-date?\na.30 Sept\nb.30 Aug\nc.30 May\n",
    ans: "a",
    des: "See you forgot it again. It's 30 Sep\n"
};
const question9 = {
    que: "Most used social-media platform?\na.insta\nb.youtube\nc.facebook\n",
    ans: "b",
    des: "I like YouTube🤩\n"
};
const question10 = {
    que: "What is my birth-year?\na.2000\nb.2001\nc.2002\n",
    ans: "b",
    des: "See you forgot it again. It's 2001\n"
};

// defining scoreboard
const highScore=[
    {nameH:"TAPPU", scoreH:"20"},
    {nameH:"LUIGI", scoreH:"18"},
    {nameH:"MARIO", scoreH:"16"},
    {nameH:"PINKU", scoreH:"14"}
];

// storing all questions in array
questionSet = [question1, question2, question3, question4, question5, question6,  question7, question8, question9, question10];

// conditions for level
for(let i=0; i<questionSet.length; i++){
    // condition for level 1
    if(i==3){
        if(score>=4){
            console.log("Congratulations! You have entered Level 2 🤩\n");
        }else{
            console.log("Aww! you failed level 1");
            break;
        }
        // condition for level 2
    }else if(i==7){
        if(score>=10){
            console.log("Congratulations! You have entered Final Level 🤩. Get ready for tough questions 🤨.\n");
        }else{
            console.log("Aww! you failed level 2");
            break;
        }
    }

    // function to check user input and print current score
    checkAns(i+1, questionSet[i].que, questionSet[i].ans, questionSet[i].des);
}

// printing current scoreboard
console.log("\n*****Current Leader-board*****");
scoreBoard(highScore);

// comparing score with high-score
let newHighScore = false;
let indexInsert = 0;
for(let i=0; i<highScore.length; i++){
    if(score>=highScore[i].scoreH){
      newHighScore=true;
      indexInsert=i;
      highScore.splice(indexInsert, 0, {nameH:`${userName.toUpperCase()}`, scoreH:`${score}`});
      break;
    }
}

console.log('---------------');

// printing final score
console.log(`Yay! Your Final Score is ${score}`);

// if score is beaten, print scoreboard with username and score
if(newHighScore){
    console.log(`Congratulations ${userName.toUpperCase()}🥳, You are my best friend 😍`);
    
    console.log("\n*****New Leader-board*****");
    scoreBoard(highScore);
}else{
    console.log(`\nSorry ${userName.toUpperCase()}, you were so close to be my best friend 🙃`);
}

function checkAns(queNumber, checkQue, checkAns, checkDes){
    // taking input from user
    const userAns = readlineSync.question(`Que${queNumber}. ${checkQue}`);

    // checking user input with original answer
    if(userAns.toUpperCase() === checkAns.toUpperCase()){
        score = score + 2;
        console.log("You are absolutely right. You get 2 points 🎉");
    }else{
        console.log("You are wrong");
        console.log(`${checkDes}`);
    }
    // printing current score
    console.log(`Your Current Score :- ${score}`);
    console.log("---------------\n");
}

// printing scoreboard
function scoreBoard(highScore){
    for(let i=0; i<highScore.length; i++){
        console.log(`${highScore[i].nameH} : ${highScore[i].scoreH}`);
    }      
}