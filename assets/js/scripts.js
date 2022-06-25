var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    if(currentNumber == "10") {
        alert("Limite máximo atingido")
        return
    }
    if(currentNumber < "-8") {
        currentNumberWrapper.style.color = "red";
        currentNumberWrapper.style.fontWeight = "bold";      
    }
    else if(currentNumber >= "7") {
        currentNumberWrapper.style.color = "green";
        currentNumberWrapper.style.fontWeight = "bold";      
    }
    else {
        currentNumberWrapper.style.color = "black";
        currentNumberWrapper.style.fontWeight = "normal";   
    }
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if(currentNumber == "-10") {
        alert("Limite mínimo atingido")
        return
    }
    if(currentNumber <= "-7") {
        currentNumberWrapper.style.color = "red";
        currentNumberWrapper.style.fontWeight = "bold";      
    }
    else if(currentNumber > "8") {
        currentNumberWrapper.style.color = "green";
        currentNumberWrapper.style.fontWeight = "bold";      
    }
    else {
        currentNumberWrapper.style.color = "black";
        currentNumberWrapper.style.fontWeight = "normal";   
    }
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}



