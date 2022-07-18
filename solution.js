//1
function exponential(num1, num2){
    if(typeof num1 == typeof num2 && typeof num2 == "number")
    {
    let exponentials = '';
    for(i=1;i<=num2;i++)
        {
          exponentials += num1**i + ' ';
        }
    return exponentials.slice(0, -1);
    }
}
console.log(exponential(3,5));


//2 
let fruit='mango'
function printFavoriteFruit(){
let fruit = 'x'
console.log('My favorite fruit is:', fruit)
};
printFavoriteFruit();

//3

function exponent(num1, num2){
    if(typeof num1 == typeof num2 && typeof num2 == "number")
    {
    let result = -1;
    result = num1**num2;
    return result;
    }
}
console.log(exponent(2,3));