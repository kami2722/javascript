let calcular = document.getElementById("calcular");

calcular.addEventListener("click", function (e) {

    e.preventDefault(); // Prevenir o envio do formulário

    // Pegar os valores dos inputs  
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    // verificar se os valores são validos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resposta").textContent = "Por favor, insira números válidos.";
    } else {
        let soma = numero1 + numero2;
        document.getElementById("resposta").textContent = `A soma de${numero1} e ${numero2} é: ${soma}`;
    }
});