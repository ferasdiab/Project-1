
let q1 = "first country that won the World Cup "
let q2 = "most player won the Ballon d'Or is "
let q3 = "most country won World Cups is  "
let q4 = "The most popular sport in USA is "
let q5 = "In which country will the 2022 World Cup be? "

const qu = [{qu : q1 , miltiOption : { first : {name : "Brazil" , stats : false} , second : {name : "Argentina" , stats : false } , third : {name : "Uruguay" , stats : true} , forth : { name : "Germany" , stats : false}} } ,
 {qu : q2 , miltiOption : {first : {name : "Cristiano Ronaldo" , stats : false} , second : {name : "Pelé‏" , stats : false} , third : {name : "Lionel Messi " , stats : true} , forth : {name : "Ronaldo" , stats : false}}  } , 
 {qu : q3  , miltiOption: {first : {name : "Brazil" , stats : true} , second : {name : "Germany" , stats : false} , third : {name : "Argentina" , stats : false} , forth : {name : "france" , stats : false}}} ,
{qu : q4 , miltiOption : {first : {name : "Basketball" , stats : false} , second : {name : "baseball" , stats : true} , third :{name : "football" , stats : false}   , forth : {name : "none" , stats : false}  } } ,
{qu : q5 , miltiOption : {first : {name : "Italy" , stats : false} , second : {name : "Qatar" , stats : true} , third :{name : "Russia" , stats : false}   , forth : {name : "France " , stats : false}  } }   ]



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
    score.innerHTML = `YOUR SCORE IS <br>${theScore} OF ${qu.length}`
    document.getElementById("result").style.position = "relative";
    document.getElementById("result").style.top = "50%";
    document.getElementById("result").style.width = "350px"
    document.getElementById("result").style.height = "100px"
    document.getElementById("result").style.margin = "auto"
    document.getElementById("result").style.marginTop = "25px"
    document.getElementById("result").style.padding = "10px"
    document.getElementById("result").style.border = "2px solid"
    document.getElementById("result").style.textAlign = "center"
    document.getElementById("home").style.display = "block"



    document.getElementById("timer").remove();
    }
    
     }, 1000);
}


} else {
    body.remove();
    score.innerHTML = `YOUR SCORE IS <br>${theScore} OF ${qu.length}`
    document.getElementById("result").style.position = "relative";
    document.getElementById("result").style.top = "50%";
    document.getElementById("result").style.width = "350px"
    document.getElementById("result").style.height = "100px"
    document.getElementById("result").style.margin = "auto"
    document.getElementById("result").style.marginTop = "25px"
    document.getElementById("result").style.padding = "10px"
    document.getElementById("result").style.border = "2px solid"
    document.getElementById("result").style.textAlign = "center"
    document.getElementById("home").style.display = "block"



    document.getElementById("timer").remove();




}


++counter

}





const chick = () => {

    if ( (document.getElementsByName("a")[0].checked) === true || 
    (document.getElementsByName("a")[1].checked) === true || (document.getElementsByName("a")[2].checked) === true 
    || (document.getElementsByName("a")[3].checked) === true ){



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

for (let i = 0 ; i < arrOfAnswer.length ; i++){
    if (arrOfAnswer[i] === "true" ) {
        document.getElementById(`first${i+1}muil`).style.background = "#228B22"
        document.getElementById(`first${i+1}muil`).style.transition = "2s"
    }
}

document.getElementsByName("a")[0].checked = false
document.getElementsByName("a")[1].checked = false
document.getElementsByName("a")[2].checked = false
document.getElementsByName("a")[3].checked = false


document.getElementById("button2").style.display = "none";
setTimeout(function(){ 
    nextQA();
 }, 3000);

    }

}
