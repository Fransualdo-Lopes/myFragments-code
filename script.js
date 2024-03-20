var userName = "fransualdo";
console.log(userName.length); // conta os caracteres da variável userName.

// limitando numero de carateres escritos em 140 caracteres.
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("you have  written" + tweetCount + " caracters, you have" + (140 - tweetCount) + "caracters remaining.");

// podemos melhorar o codigo com estas linhas:
var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);
//alert("you have  written" + tweetCount + " caracters, you have" + (140 - tweetCount) + "caracters remaining.");

// transformando strings 
userName = "Joao";
userName = userName.toUpCase();// transformando strings em caixa alta:
userName = userName.toLowerCase();// transformando strings em caixa baixa:

//solicitar input pelo alert ao usuario

alert("Hello " + userName);
userName = prompt
// agora vamos colocar para mesmo que o usuario escrever o seu nome em caixa baixa o sistema retornará
//com a inicial em caixa baixa;

//1 Create a var that stores the name that user enters via prompt.
var userName = prompt("what is your name?");

//2 Capitalise the first letter of their name.
//a isolate the first char.
var fistChar = userName.slice(0, 1);
// retorno será a primeira letra do nome

//b Turn the first char up case.
var upperCaseFirstChar = fistChar.toUpperCase();
// retorno será a primira letra do nome em caixa alta

//c Isolate the rest of the name.
var rest0fName = userName.slice(1, userName.length);
// retorno será o restante do primeiro nome

//d change the rest of name to lower case 
var rest0fName = rest0fName.toLowerCase();
//e concatenate the first char with the rest of the char.
var capitalisedName = upperCaseFirstChar + rest0fName;

//3 We use the capitalised version of their name to geet them using an alert.
alert("Hello, " + capitalisedName);

//Hello, Fransualdo

// idade do cachorro em anos humanos
var dogAge = prompt(" How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("your dog is " + humanAge + "years old in human years.");

// linhas sobre funções:
function getMilk() {   // pegar o leite
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

// Calculando idade tempo de vida restante até 90 anos:

function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;
  console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(25)

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(peso, altura) {
  // var bmi = peso/(altura*altura);
  var bmi = peso / Math.pow(altura, 2)// elevando altura ao quadrado usando "Math.pow"
  return Math.round(bmi); // Math.round arredonda o numero para o inteiro mais proximo.
  //return Math.floor(bmi); // Math.floor arredonda um número para o menor inteiro mais próximo
  //return bmi;
}

var bmi = bmiCalculator(65, 1.8);

if (bmi <= 18.5) {
    console.log("Seu IMC é", bmi, "então você está abaixo do peso.");
} else if (bmi > 18.5 && bmi <= 24.9) {
    console.log("Seu IMC é", bmi, "então você tem um peso normal.");
} else {
    console.log("Seu IMC é", bmi, "então você está acima do peso.");
}

/* Calculadora de IMC avançada (IF/ELSE)
Anteriormente, criamos uma função capaz de calcular o IMC. Mas assim que obtivermos o resultado, desejaremos dizer ao usuário o que o número significa.

Escreva uma função que produza (retorne) uma mensagem diferente dependendo do IMC.


IMC <18,5, o resultado deve ser: "Seu IMC é <bmi>, então você está abaixo do peso."

IMC 18,5-24,9, a saída deve ser "Seu IMC é <bmi>, então você tem um peso normal."

IMC >24,9, o resultado deverá ser "Seu IMC é <bmi>, então você está acima do peso".



A mensagem DEVE ser retornada como saída da sua função. Você NÃO PRECISA usar alert, prompt ou console.log neste desafio.

IMPORTANTE o texto da mensagem deve corresponder exatamente para que o código passe na validação. Incluindo pontuação e letras maiúsculas.

*/

// utilizando numeros aleatórios Math.randon()
var n = Math.random();
console.log(n);



// PROGRAMA QUE INFORMA SE O ANO É BISSEXTO OU NAO:
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      }
    } else {
      return "Leap year."
    }
  } else {
    return "Not leap year."
  }
}

console.log(isLeap(1948)); // true
console.log(isLeap(1998)); // false
console.log(isLeap(2020)); // true


//quem vai comprar hoje?
function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy lunch today!";  
}

var names = ['Maria', 'João', 'Pedro', 'Tiago'];
console.log(whosPaying(names));

//FizzBuzz até 100 usando while:
function fizzBuzz() {
  var output = [];
  var count = 1;
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  return output;
}

console.log(fizzBuzz());
