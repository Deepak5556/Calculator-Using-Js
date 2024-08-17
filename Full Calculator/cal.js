let os=document.getElementById("out");

//To Display
function display(num){
    os.value+=num;
}

//Calculating
function cal(){
    try{
        os.value=eval(os.value);
    }
    catch(err){
            os.value="Invalild"
    }
}

// Clear Function
function clr(){
    os.value=""
}

// Delete Function
function del(){
    os.value=os.value.slice(0,-1);
}
