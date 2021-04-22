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