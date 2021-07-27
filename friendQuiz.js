var readlinesync = require ("readline-sync");
console.log("Welcome to 'How well do you Know about Furquan'");
var score = 0;
var username = readlinesync.question("Please enter your name ");
console.log("Welcome " ,username);

function play (question , answer){
  var useranswer = readlinesync.question(question);
  if(useranswer === answer){
    console.log("You are correct");
    score = score + 1;
    console.log("You scored :",score);
    console.log("-------------------");
  }
  else {
    console.log("You are wrong");
    console.log("You scored :",score);
    console.log("-------------------");
  }
}

var questionone = {
  question : "1 : where do i live " ,
  answer : "ambur" ,
}

var questiontwo = {
  question : "2 : where do i work " ,
  answer : "tcs" ,
}
var questionThree = {
  question : "3 : From which university i have completed my Graduation ?" ,
  answer : "VIT" ,
}
var questionFour = {
  question : "4 : where Sports do i like to play ? " ,
  answer : "Cricket" ,
}
var questionFive = {
  question : "5 : How Old am I ? " ,
  answer : "22" ,
}
var questionAll =[questionone , questiontwo , questionThree , questionFour , questionFive];

for (var i=0 ; i<questionAll.length ; i++ ){
  var currentquestion = questionAll[i] ;
  play(currentquestion.question , currentquestion.answer);
}

console.log("Your Final score is :" , score);




