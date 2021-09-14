const btn = document.getElementById("btn");
const input1 = document.getElementById("input1");
const operator = document.getElementById("operator");
const input2 = document.getElementById("input2");
const output = document.getElementById("output");

btn.addEventListener("click", function() {
    var result;
    const var1 = parseInt(input1.value);
    const var2 = parseInt(input2.value);
    
    switch(operator.value)
    {
        case "+":
        result = var1 + var2;
        break;
        case "-":
        result = var1 - var2;
        break;
        
        default: result = "wrong operator";
    }
    output.innerHTML = result;
});