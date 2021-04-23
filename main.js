/*

let q1 = "What is the largest country in the world ?"
let q2 = "Who Invented the Light Bulb ?"
let q3 = "What is the longest river in the world ?"

const qu = [{qu : q1  } , {qu : q2 } , {qu : q3 } ]

const miltiOption = [
{first : "Russia" , second : "China" , third : "USA" , forth : "Canada"},
{first : "Thomas Edison" , second : "Joseph Swan" , third : "Nikola Tesla" , forth : "Albert Einstein"},
{first : "Amazon River" , second : "Mississippi River" , third : "Yangtze River" , forth : "Nile river"}
]

const rightAnswer = ["a","a","a","a"]

let counter = 0
const newQA =  document.querySelector("#QA");
const newOption1 =  document.querySelector("#aaaaa");
const newOption2 =  document.querySelector("#bbbbb");
const newOption3 =  document.querySelector("#cccccc");
const newOption4 =  document.querySelector("#dddddd");
const buttonstats =  document.querySelector("button");
const chosenanswer =  document.querySelector("#multi1");
console.log(chosenanswer.value )





const nextQA = () => {

newQA.innerHTML = qu[counter].qu;
newOption1.innerText = miltiOption[counter].first
newOption2.innerText = miltiOption[counter].second
newOption3.innerText = miltiOption[counter].third
newOption4.innerText = miltiOption[counter].forth

console.log(chosenanswer.value )

if ( counter === qu.length-1 ){
    buttonstats.innerText = "Finish"
} else {
    buttonstats.innerText = "Next"
 }


++counter

}

*/


let q1 = "What is the largest country in the world ?"
let q2 = "Who Invented the Light Bulb ?"
let q3 = "What is the longest river in the world ?"

const qu = [{qu : q1 , miltiOption : { first : {name : "Russia" , stats : true} , second : {name : "China" , stats : false } , third : {name : "USA" , stats : false} , forth : { name : "Canada" , stats : false}} } ,
 {qu : q2 , miltiOption : {first : {name : "Thomas Edison" , stats : true} , second : {name : "Joseph Swan" , stats : false} , third : {name : "Nikola Tesla" , stats : false} , forth : {name : "Albert Einstein" , stats : false}}  } , 
 {qu : q3  , miltiOption: {first : {name : "Amazon River" , stats : false} , second : {name : "Mississippi River" , stats : false} , third : {name : "Yangtze River" , stats : false} , forth : {name : "Nile river" , stats : true}}} ]



let counter = 0
const newQA =  document.querySelector("#QA");
const newOption1 =  document.querySelector("#aaaaa");
const newOption2 =  document.querySelector("#bbbbb");
const newOption3 =  document.querySelector("#cccccc");
const newOption4 =  document.querySelector("#dddddd");



const option1stats =  document.querySelector("#multi1");
const option2stats =  document.querySelector("#multi2");
const option3stats =  document.querySelector("#multi3");
const option4stats =  document.querySelector("#multi4");




const buttonstats =  document.querySelector("button");
const chosenanswer =  document.querySelector("#multi1");

const body = document.querySelector(".all");

const score = document.querySelector(".score");


console.log(chosenanswer.value )





const nextQA = () => {

if (counter !== qu.length ){

newQA.innerHTML = qu[counter].qu;

newOption1.innerText = qu[counter].miltiOption.first.name;
newOption2.innerText = qu[counter].miltiOption.second.name;
newOption3.innerText = qu[counter].miltiOption.third.name;
newOption4.innerText = qu[counter].miltiOption.forth.name;


option1stats.value = qu[counter].miltiOption.first.stats;
option2stats.value = qu[counter].miltiOption.second.stats;
option3stats.value = qu[counter].miltiOption.third.stats;
option4stats.value = qu[counter].miltiOption.forth.stats;

console.log( option1stats.value)
console.log( option2stats.value)
console.log(option3stats.value )
console.log(option4stats.value )
console.log("end")


if ( counter === qu.length-1 ){
    buttonstats.innerText = "Finish"
} else {
    buttonstats.innerText = "Next"
 }

} else {
    body.style.display = "none";
    score.innerHTML = "full grade"



}


++counter

}