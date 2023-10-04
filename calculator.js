function add(a,b){
    return parseFloat((a + b).toFixed(2));
}
function subtract(a,b){
    return parseFloat((a - b).toFixed(2));
}
function multiply(a,b){
    return parseFloat((a * b).toFixed(2));
}
function divide(a,b){
    return parseFloat((a / b).toFixed(2));
}

var firstNumber = "";
var secondNumber = "";
var operator = "";
var screenString="";

   

function operate(a,b,c)
{
    if(c === "+") {
        return add(a,b);

    }
    if(c === "-") {
         return subtract(a,b);

    }
    if(c === "*") {
         return multiply(a,b);

    }
    if(c === "/") {
         return divide(a,b);

    }
}

var newArray =[];
var array =[];
var string = "";

 var allNumberAndOperandButtons = document.querySelectorAll(".numbers");
 
 allNumberAndOperandButtons.forEach(element=>element.addEventListener("click", (e) =>{
   var value = e.target.innerHTML;

   if (value != "*" || value != "-" || value != "/" || value != "+" ) {
     string = string + e.target.dataset.value;  
     newArray = array.slice();
     newArray.push(string);
   }
   
   if(value === "*" || value === "-" || value === "/" || value === "+"){
    newArray.push(e.target.dataset.value)
    
   }

return newArray;

   
}
 ));
 
var equals = document.querySelector(".equals");
equals.addEventListener("click", ()=>{
    var arrayToOperateOn= newArray.toString().split(/([-+*\/])/g);
    var arr = arrayToOperateOn.slice();
    var arrayTobeSliced =[];
    var result = 0;
    var i = 0;


    for (let i = 0; i <= arr.length ; i++){
        
         if (arr[i] === "*" || arr[i] === "-" || arr[i] === "+" ||arr[i] === "/"){
             result =  operate(parseInt(arr[i-1]), parseInt(arr[i+1]), arr[i]); 
             arrayTobeSliced = arr.splice(0,3,result);
             i--;

             document.querySelector(".display").innerHTML = result;
          }
        }
        console.log( result);
    }
    
    );
 
var buttonClear = document.querySelector(".clearButton");

buttonClear.addEventListener("click" , ()=> {
 
 document.querySelector(".display").innerHTML="";

 
 arrayToOperateOn=[];
 arr=[];
 newArray = [];
 string="";
 

}
)

