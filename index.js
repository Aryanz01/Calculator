
const display= document.getElementById("display");

function appenToDisplay(input){
    display.value +=input;
}

function clearDisplay(){
    display.value = "";
}

// function calculate(){
//     try{
//     display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "invalid"
//     }

// }


function calculate(){
    try{
        display.value = evaluateExpression(display.value);
    }
    catch(error){
        display.value = "invalid"
    }
}


function evaluateExpression(expression){
    const operators = {
        '+': (a,b) => a+b,
        '-': (a,b) =>a-b,
        '*': (a,b) => a*b,
        '/': (a,b) => a/b,
        '%': (a,b) => a%b
    };

    const tokens = expression.match(/\d+(\.\d+)?|[\+\-\*\/\(\)]/g);
    if (!tokens) throw new Error ("invalid expression");

    let curr_op= null;
    const stack =[];

    tokens.forEach(token =>{
        if(operators[token]){
            curr_op =token;
        }

        else{
            const number = parseFloat(token);
            
            if(curr_op){
                const last_num= stack.pop();
                const result= operators[curr_op](last_num, number);
                stack.push(result);
                curr_op=null;
                
            }

            else{
                stack.push(number);
            }
        }


    });

    if (stack.length !== 1) {
        throw new Error("Invalid expression");
    }

    return stack.pop();
}





// const display = document.getElementById("display");

// function appenToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     try {
//         display.value = evaluateExpression(display.value);
//     } catch (error) {
//         display.value = "invalid";
//     }
// }

// function evaluateExpression(expression) {
//     const operators = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//         '*': (a, b) => a * b,
//         '/': (a, b) => a / b,
//         '%': (a, b) => a % b
//     };

//     const tokens = expression.match(/(\d+\.?\d*|\.\d+|[+\-*/%])/g);
//     if (!tokens) throw new Error("Invalid expression");

//     const stack = [];
//     let currentOperator = null;

//     tokens.forEach(token => {
//         if (operators[token]) {
//             currentOperator = token;
//         } else {
//             const number = parseFloat(token);
//             if (currentOperator) {
//                 const lastNumber = stack.pop();
//                 const result = operators[currentOperator](lastNumber, number);
//                 stack.push(result);
//                 currentOperator = null;
//             } else {
//                 stack.push(number);
//             }
//         }
//     });

//     if (stack.length !== 1) throw new Error("Invalid expression");
//     return stack[0];
// }

