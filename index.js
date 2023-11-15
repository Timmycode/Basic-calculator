const buttons = document.querySelectorAll("button");
const inputField = document.getElementById("result");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", ()=>{
        const buttonValue= buttons[i].textContent;
        if(buttonValue === "C"){
            clearResult()
        }
         
        if(buttonValue === "AC"){
            clearOnce()
        }

        else if(buttonValue === "="){
            calculateResult()
        }

        else{
            appendValue(buttonValue)
        }
    })
}

function clearResult(){
   inputField.value ="";
}

function clearOnce(){
    var currentValue = inputField.value;
    if (currentValue.length > 0)
    var newValue = currentValue.slice(0, -1);
    inputField.value = newValue;
 }

function calculateResult(){
    inputField.value = eval(inputField.value);
}

function appendValue(buttonValue){
     inputField.value += buttonValue
}

