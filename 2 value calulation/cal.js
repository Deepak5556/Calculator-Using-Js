function add(){
    var num1,num2;
    num1=Number(document.getElementById("1").value);
    num2=Number(document.getElementById("2").value);
    var num3=num1+num2;
    document.getElementById("result").innerHTML=num3
}

function sub(){
    var num1,num2;
    num1=Number(document.getElementById("1").value);
    num2=Number(document.getElementById("2").value);
    var num3=num1-num2;
    document.getElementById("result").innerHTML=num3
}
function multi(){
    var num1,num2;
    num1=Number(document.getElementById("1").value);
    num2=Number(document.getElementById("2").value);
    var num3=num1*num2;
    document.getElementById("result").innerHTML=num3
}
function div(){
    var num1,num2;
    num1=Number(document.getElementById("1").value);
    num2=Number(document.getElementById("2").value);
    var num3=num1/num2;
    document.getElementById("result").innerHTML=num3
}
function mod(){
    var num1,num2;
    num1=Number(document.getElementById("1").value);
    num2=Number(document.getElementById("2").value);
    var num3=num1%num2;
    document.getElementById("result").innerHTML=num3
}

function clr(){
    document.getElementById("1").value="";
    document.getElementById("2").value=""
    document.getElementById("result").innerHTML=""
}