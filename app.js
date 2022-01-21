let buffer = "0";
let previousOperator = null;
let runningTotal;
const screen = document.querySelector(".display");

document.querySelector('.calc-buttons').addEventListener('click', function(event){
    ButtonClick(event.target.innerText);
});

function ButtonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
    }
    rerender();
}

function handleSymbol(value){
    if(value === "C"){
        buffer = "0";
        previousOperator = null;
        runningTotal = "";
        rerender();
    }else if(value === "⬅"){
        if(buffer.length === 1){
            buffer = "0";
        }else{
            buffer = buffer.substring(0, buffer.length-1);
        }
        rerender();
    }else if(value === "+"){
        runningTotal = buffer;
        previousOperator = "+";
        buffer = "0";
        rerender();
    }else if(value === "-"){
        runningTotal = buffer;
        previousOperator = "-";
        buffer = "0";
        rerender();
    }else if(value === "✖"){
        runningTotal = buffer;
        previousOperator = "✖";
        buffer = "0";
        rerender();
    }else if(value === "➗"){
        runningTotal = buffer;
        previousOperator = "➗";
        buffer = "0";
        rerender();
    }else if(value === "="){
        if(previousOperator === null){
            return;
        }else{
            handleMath(previousOperator, buffer);
            buffer = runningTotal;
            rerender();
        }
    }

}

function handleMath(opr, secstr){
    if(opr==="+"){
        runningTotal = parseInt(runningTotal) + parseInt(secstr);
    }else if(opr==="-"){
        runningTotal = parseInt(runningTotal) - parseInt(secstr);
    }else if(opr==="✖"){
        runningTotal = parseInt(runningTotal) * parseInt(secstr);
    }else if(opr==="➗"){
        runningTotal = parseInt(runningTotal) / parseInt(secstr);
    }
}


function rerender(){
    screen.innerText = buffer;
}