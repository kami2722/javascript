let peso = prompt("Digite seu peso: ");
let altura = prompt("Digite sua altura: ");

let imc = peso / (altura * altura);

document.body.innerHTML = `<h1>Seu IMC é: ${imc}</h1>`;
