const buttons = document.querySelectorAll("button");
const display = document.getElementById("test");
const container = document.getElementById("calc-container")

buttons.forEach(btn => btn.addEventListener("click", getValue));
// stores the values for calculation
var firstValue = ""
var operatorValue= ""
var secondValue = ""
var result = ""

const num = ["1", "2", "3", "4" , "5", "6", "7", "8", "9", "0"]





function clear() {
    firstValue = ""
    operatorValue= ""
    secondValue = ""
    display.innerHTML = ""

}
function getValue(event){
    
    let value = event.target.value
    
    switch(value){

        case "c":
            


        case "A/C":
            clear()
            break;
        case "/": case"*":case"-":case"+":
            if(firstValue === ""){
                firstValue = parseInt(display.innerHTML)
                operatorValue = value
                display.innerHTML = ""            
                console.log("if", firstValue)
                console.log(secondValue)
                console.log(operatorValue)
            }
            else if(firstValue !== ""){
                operatorValue = value
                display.innerHTML = ""
                console.log("else", firstValue)
                console.log(secondValue)
                console.log(operatorValue)

            }       
            break;
        case "enter":
            if(firstValue !== "" && operatorValue !== "" && display.innerHTML !==""){
                secondValue = parseFloat(display.innerHTML)
                
                submit(firstValue, secondValue, operatorValue)
                
                
            
            }
            break;
        case ".":
            if(!(display.innerHTML.toString().includes(value))){
                display.innerHTML += value
            }
            break

        
        default:
            if(display.innerHTML === ""){
                display.innerHTML = ""
            }
            display.innerHTML += value
            
            
    }
    
}
    
function submit(a, b, c){
    
    switch(c){

        case "+":
            add(a,b)
            firstValue = parseFloat(result)
            secondValue = ""
            operatorValue = ""
            result = ""
            break
        case "-":
            subtract(a,b)
            firstValue = parseFloat(result)
            secondValue = ""
            operatorValue = ""
            break
        case "*":
            multiply(a,b)
            firstValue = parseFloat(result)
            secondValue = ""
            operatorValue = ""
            break
        case "/":
            divide(a,b)
            firstValue = parseFloat(result)
            secondValue = ""
            operatorValue = ""
            break
    }
    
}




const add = function(firstValue, secondValue) {
    result = (firstValue + secondValue).toLocaleString(undefined, { maximumFractionDigits: 4, minimumFractionDigits: 0 });
    display.innerHTML = result
    
    console.log(firstValue)
    console.log(secondValue)
    console.log(operatorValue)
    
    
  };

  const subtract = function(firstValue, secondValue) {
    result = (firstValue - secondValue).toLocaleString(undefined, { maximumFractionDigits: 4, minimumFractionDigits: 0 });
    display.innerHTML = result
    
    console.log(firstValue)
    console.log(secondValue)
    console.log(operatorValue)
    
  };

  const multiply = function(firstValue, secondValue) {
    result = (firstValue * secondValue).toLocaleString(undefined, { maximumFractionDigits: 4, minimumFractionDigits: 0 });
    display.innerHTML = result
    
        
  };

  const divide = function(firstValue, secondValue) {
    result = (firstValue / secondValue).toLocaleString(undefined, { maximumFractionDigits: 4, minimumFractionDigits: 0 });
    display.innerHTML = result
    
    
  };
