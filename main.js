

let q1 = "What is the largest country in the world ?"
let q2 = "Who Invented the Light Bulb ?"
let q3 = "What is the longest river in the world ?"

const qu = [{qu : q1 , miltiOption : { first : {name : "Russia" , stats : true} , second : {name : "China" , stats : false } , third : {name : "USA" , stats : false} , forth : { name : "Canada" , stats : false}} } ,
 {qu : q2 , miltiOption : {first : {name : "Thomas Edison" , stats : true} , second : {name : "Joseph Swan" , stats : false} , third : {name : "Nikola Tesla" , stats : false} , forth : {name : "Albert Einstein" , stats : false}}  } , 
 {qu : q3  , miltiOption: {first : {name : "Amazon River" , stats : false} , second : {name : "Mississippi River" , stats : false} , third : {name : "Yangtze River" , stats : false} , forth : {name : "Nile river" , stats : true}}} ]

 

let counter = 0
let theScore = 0

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

    document.getElementById("button2").style.display = "inline-block";

    document.getElementById("first1muil").style.background = "#6a94e4"
    document.getElementById("first2muil").style.background = "#6a94e4"
    document.getElementById("first3muil").style.background = "#6a94e4"
    document.getElementById("first4muil").style.background = "#6a94e4"

    document.getElementById("first1muil").style.transition = "0s"
    document.getElementById("first2muil").style.transition = "0s"
    document.getElementById("first3muil").style.transition = "0s"
    document.getElementById("first4muil").style.transition = "0s"



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

document.getElementById("button1").style.display = "none";

if (counter === 0) {
    let timer = 60 
const timeDown = setInterval(function(){

    document.getElementById("timer").innerHTML = `${timer} second left`
    
    --timer
    
    if (timer < 0 ){
        clearInterval(timeDown);
    
        body.remove();
        score.innerHTML = `${theScore} OF ${qu.length}`
        document.getElementById("result").style.position = "relative";
        document.getElementById("result").style.top = "50%";
        document.getElementById("result").style.width = "350px"
        document.getElementById("result").style.height = "100px"
        document.getElementById("result").style.background = "rgb(36, 62, 109)"
        document.getElementById("result").style.margin = "90px 0px 69px 160px"
        document.getElementById("result").style.padding = "10px"
        document.getElementById("result").style.border = "2px solid"
        document.getElementById("result").style.textAlign = "center"
    
        document.getElementById("timer").remove();
    }
    
     }, 1000);
}




if ( counter === qu.length-1 ){
    buttonstats.innerText = "Finish"
} else {
    buttonstats.innerText = "Next"
 }

} else {
    body.remove();
    score.innerHTML = `${theScore} OF ${qu.length}`
    document.getElementById("result").style.position = "relative";
    document.getElementById("result").style.top = "50%";
    document.getElementById("result").style.width = "350px"
    document.getElementById("result").style.height = "100px"
    document.getElementById("result").style.background = "rgb(36, 62, 109)"
    document.getElementById("result").style.margin = "90px 0px 69px 160px"
    document.getElementById("result").style.padding = "10px"
    document.getElementById("result").style.border = "2px solid"
    document.getElementById("result").style.textAlign = "center"

    document.getElementById("timer").remove();




}


++counter

}





const chick = () => {

const arrOfAnswer = [option1stats.value , option2stats.value
, option3stats.value  , option4stats.value]

if ((document.getElementsByName("a")[0].checked) === true &&
arrOfAnswer[0] === "true"  ) { ++theScore }

if ((document.getElementsByName("a")[1].checked) === true &&
arrOfAnswer[1] === "true"  ) { ++theScore }

if ((document.getElementsByName("a")[2].checked) === true &&
arrOfAnswer[2] === "true"  ) { ++theScore }

if ((document.getElementsByName("a")[3].checked) === true &&
arrOfAnswer[3] === "true"  ) { ++theScore }


if ((document.getElementsByName("a")[0].checked) === true){
    if (arrOfAnswer[0] === "true" ) {
        document.getElementById("first1muil").style.background = "#228B22"
        document.getElementById("first1muil").style.transition = "2s"
    } else {document.getElementById("first1muil").style.background = "#B22222"
    document.getElementById("first1muil").style.transition = "2s"

}
}


if ((document.getElementsByName("a")[1].checked) === true){
    if (arrOfAnswer[1] === "true" ) {
        document.getElementById("first2muil").style.background = "#228B22"
        document.getElementById("first2muil").style.transition = "2s"

    } else {document.getElementById("first2muil").style.background = "#B22222"
    document.getElementById("first2muil").style.transition = "2s"


}
}

if ((document.getElementsByName("a")[2].checked) === true){
    if (arrOfAnswer[2] === "true" ) {
        document.getElementById("first3muil").style.background = "#228B22"
        document.getElementById("first3muil").style.transition = "2s"

    } else {document.getElementById("first3muil").style.background = "#B22222"
    document.getElementById("first3muil").style.transition = "2s"


}
}


if ((document.getElementsByName("a")[3].checked) === true){
    if (arrOfAnswer[3] === "true" ) {
        document.getElementById("first4muil").style.background = "#228B22"
        document.getElementById("first4muil").style.transition = "2s"

    } else {document.getElementById("first4muil").style.background = "#B22222"
    document.getElementById("first4muil").style.transition = "2s"


}
}


document.getElementById("button2").style.display = "none";
document.getElementById("button1").style.display = "inline-block";


}
