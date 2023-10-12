var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var input=document.getElementById("input")
var pl=document.getElementById("pl");
var min=document.getElementById("min");
var mul=document.getElementById("mul");
var div=document.getElementById("div");
var clear=document.getElementById("AC");
var eq=document.getElementById("equals")
function on(){
    input.value+=1
}
function tw(){
    input.value+=2
}
function thre(){
    input.value+=3
}
function fou(){
    input.value+=4
}
function fiv(){
    input.value+=5
}
function si(){
    input.value+=6
}
function seve(){
    input.value+=7
}
function eigh(){
    input.value+=8
}
function nin(){
    input.value+=9
}
function zer(){
    input.value+=0
}
function plus(){
    input.value+="+"
}
function minus(){
    input.value+="-"
}
function multiply(){
    input.value+="*"
}
function divide(){
    input.value+="/"
}
function AC(){
    input.value=""
}
function equal(){
    var data=input.value;
    var cal = eval(data);
    input.value=cal;
    // alert(input.value[2])
}



function check(){
    for(let i =0;i<input.value.length;i++){
        var str=String(input.value);
        var len=str.length()
        if(str.includes("+")){
            input.value=Number(str.slice(0,len-1))
        }
        else{
            input.value=input.value
        }
        
    }
}
