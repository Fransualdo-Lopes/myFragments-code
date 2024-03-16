var userName = "fransualdo";
console.log(userName.length); // conta os caracteres da variável userName.

// limitando numero de carateres escritos em 140 caracteres.
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("you have  written" + tweetCount + " caracters, you have" + (140 - tweetCount) + "caracters remaining.");

// podemos melhorar o codigo com estas linhas:
var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
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
var fistChar = userName.slice(0,1);
// retorno será a primeira letra do nome

//b Turn the first char up case.
var upperCaseFirstChar = fistChar.toUpperCase();
// retorno será a primira letra do nome em caixa alta

//c Isolate the rest of the name.
var rest0fName = userName.slice(1,userName.length);
// retorno será o restante do primeiro nome

//d change the rest of name to lower case 
var rest0fName = rest0fName.toLowerCase();
//e concatenate the first char with the rest of the char.
var capitalisedName = upperCaseFirstChar + rest0fName; 

//3 We use the capitalised version of their name to geet them using an alert.
alert( "Hello, " + capitalisedName);

//Hello, Fransualdo

// idade do cachorro em anos humanos
var dogAge = prompt(" How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
