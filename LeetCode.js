const numbers = [1,2,3,4,5];
numbers.forEach(element => console.log(element) )
console.log(numbers)

const numbers2 = [1,2,3,4,5];
const newnumber = numbers2.map(double);
    function double (num){
        return num * 2; 
 
}
console.log(newnumber); 

const numbers3 = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,510,877,1387,2264];
const newnumber2 = numbers3.filter(element => element %2===0);

console.log(newnumber2)


const string = ["hola","mundo","que","pasa"];
const newstring = string.reduce(function(valor1,valor2){
    return valor1 + " " + valor2;

})

    console.log(newstring);