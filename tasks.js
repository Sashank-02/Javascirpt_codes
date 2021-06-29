/*Golf code */
var names=["Hole-in-one","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home"];
function golfScore(par,strokes)
{
    if(strokes==1) {
    return names[0]; }

   else if(strokes == par-2) {
    return names[1]; }

   else if(strokes==par-1) {
    return names[2]; }

   else if(strokes==par) {
    return names[3]; }

   else if(strokes==par+1) {
    return names[4]; }

   else if(strokes==par+2) {
    return names[5]; }

   else if(strokes==par+3) {
    return names[6]; }
}
 /*Counting cards */
 
 var count=0;
 function cc(card){
     switch(card){
    case 2:    
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 10: 
    case "J":
    case "Q":
    case "K":
    case "A":    
        count--;
        break;
  }
  var holdBet='Hold';
  if(count>0)
 holdBet='Bet';
  return count+ " " + holdBet;
 } 
 cc(2); cc('K'); cc(10); cc('K'); cc('A');
 console.log(cc(4));
/* Objects*/
var ourdog = {
    "animal name" : "dog" ,
    "breakfast eaten" : "pedigree",
    "the drink" : "water"
};
var name= ourdog["animal name"];  
var drink= ourdog["the drink"];
console.log(drink);

var checkObj = {
    name:"sashank",
    age: 6,
    occupation:"software employee"
};
function check(objVal){
    if(checkObj.hasOwnProperty(objVal)){
    return checkObj[objVal];}

    else{
    return "Not found" ;}
}
console.log(check("age"));
/* parseInt function */
function convertToInteger(stir){
    return parseInt(stir,8);
}
console.log(convertToInteger(27));

/*checking scope */
function checkScope() {
"use strict";
    let i="function scope";
    if(true) {
     let i="block scope";
        console.log("block scope i is", i);    
    }
console.log("function scope i is", i);
}
checkScope();

const mathfxn= {
    Pi: 3.14
};

Object.freeze(mathfxn);
mathfxn.Pi=99;
console.log(mathfxn.Pi);