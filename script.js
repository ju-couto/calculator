let newNumber = true;
function insert(num){
    let display = document.getElementById("display").value;
    if(display == '0'|| newNumber){
        document.getElementById("display").value = num;
        newNumber = false;
    } else{
        document.getElementById("display").value += num;
    }
    
}

function clearCalc (){
    document.getElementById("display").value = "0";
}

function calc(){
    let display = document.getElementById("display").value;
    if(display){
        try {
            document.getElementById("display").value = eval(display);
        } catch {
            document.getElementById("display").value = "Error";
        }
        
        newNumber = true;
    }
}
function invert (){
    let display = document.getElementById("display").value;
    if(display){
        document.getElementById("display").value = eval(display) * -1;
    }
}
