var keys  = [].slice.call(document.getElementsByClassName('item'));
var operators = ['/', '*', '-', '+'];

keys.forEach(function (el){
    el.addEventListener('click', myfunction, false);
});

function myfunction(e){
    
    var display = document.querySelector('.display'); // initializing
    var previousVal = display.innerHTML;    //assignment 
    var currentVal = this.innerHTML;
    var op = document.getElementsByClassName('op');
    
    if(currentVal === "AC"){
        display.textContent = "";
    }
    else if(currentVal === "+/-"){
        display.textContent = "-";    
     }
    else if(currentVal === "%"){
        var percent = previousVal/100;
        display.textContent = percent;
    }
    else if(currentVal === "="){
        var calculate = previousVal;        
        var lastNum = calculate[calculate.length -1];
        calculate = calculate.replace(/×/g, '*').replace(/÷/g, '/');
        if(calculate){            
            display.textContent = eval(calculate);
        }
    }
    else{
        display.textContent= previousVal + currentVal;
        
    }
};

