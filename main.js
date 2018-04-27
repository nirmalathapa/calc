//display the output from the click
const display = document.querySelector('.display');

//get the keys from html collection
const keys = document.getElementsByClassName('item'); 

//store operators sign
const op = ['/', '+', '-', '%', '*', '÷', '×', '+/-', '.'];

// function that clears the disply
function allClear(){
    display.textContent = "";
}
 
//add click event on each keys;
for(let i = 0; i < keys.length; i++){
    
    keys[i].addEventListener('click', function(e){
        let currentVal = e.target.textContent;
        let previousVal = display.textContent;
        console.log('pre',previousVal);
        console.log('cur',currentVal);
        let lastInd = previousVal.slice(-1);
        console.log('iam', lastInd);
        //disable when the operator sign is clicked
        if(op.indexOf(currentVal) > -1 && previousVal == ""){
            return;
        }
        //disable more than one click of an operator sign 
        if(op.indexOf(lastInd) !== -1 && op.indexOf(currentVal) !== -1){
            return;
        };

        if(currentVal === "AC"){
            allClear();
        } else if(currentVal === "="){
            let calculate = previousVal;
            //replace × and ÷
            let replaceOp = calculate.replace('×', '*').replace('÷', '/');
            display.textContent = eval(replaceOp);
            //should not be able to click operators more than once
        }else if(currentVal === "%"){
            let percent = previousVal / 100; //calculate percent when clicked on %
            display.textContent = percent;

        }else if(currentVal === "+/-"){
            display.textContent = '-';   
        }
        else{
            display.textContent = previousVal + currentVal;
        }
    })
}
