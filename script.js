let peso = parseFloat(prompt("Digite seu peso"));

let altura = parseFloat(prompt("Digite sua altura"));

let imc = peso / (altura * altura) 

console.log("seu imc é " +imc)

 
if (imc < 18.5) {
    console.log("Você está abaixo do peso");

} else if (imc < 24.9) {
    console.log("Você está no peso ideal");

} else if (imc < 29.9) {
    console.log("Você está com sobrepeso");
    
} else {
    console.log("Você está com obesidade");
}
 

