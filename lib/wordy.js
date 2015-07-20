'use strict';
//can also do 
// var newQuestion = question.replace(/multiplied by/g, '*').replace(/plus/g, '+').replace(/divided by/g, '/').replace(/minus/g, '-');
//eval(newQuestion.replace("What is ", "").replace("?", ""))
//except it will break on 1 of them

function WordProblem(question){
this.answer = function(){
  var newQuestion = question.replace(/multiplied by/g, '*').replace(/plus/g, '+').replace(/divided by/g, '/').replace(/minus/g, '-');

  var operator1 = newQuestion.split(" ")[3]
  var operator2 = newQuestion.split(" ")[5]

  var array=[];
  newQuestion.split(" ").forEach(function(num){
 
   array.push(parseInt(num))
 });

  var number1 = array.filter(Number)[0]
  var number2 = array.filter(Number)[1]
  var number3 = array.filter(Number)[2]
    // var number1 = parseInt(question.split(" ")[2])
    // var number2 = parseInt(question.split(" ")[4].split("?")[0])

    if (question ==newQuestion){
      throw new ArgumentError
    }

    else if((operator1 == "+") && (operator2 == "+")){
      debugger;
      return number1 + number2 + number3;
    }

    else if(operator1 == "+" && operator2 == "-"){
      return number1 + number2 - number3; 
    }

    else if(operator1 == "-" && operator2 == "-"){
      return number1 - number2 - number3;
    }

    else if(operator1== "-" && operator2=="+"){
      return number1 - number2 + number3;
    }

    else if(operator1 == "*" && operator2== "*"){
      return number1 * number2 * number3;
    }

    else if(operator1 == "+" && operator2== "*"){
      return ((number1 + number2) * number3);
    }

    else if(operator1 == "/" && operator2 == "/"){
      return number1 / number2 / number3;
    }

    else if(operator1 == "+"){
      return number1 + number2; 
    }
    
    else if(operator1 == "-"){
      return number1 - number2;
    }

    else if(operator1 == "*"){
      debugger;
      return number1 * number2;
    }

    else if(operator1 == "/"){
      return number1 / number2
    }

  }
}

function ArgumentError(){}

