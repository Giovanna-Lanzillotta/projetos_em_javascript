// DOMContentLoaded é um evento que acontece quando a estrutura do HTML já esta totalmente carregada.
// addEventListener é um mecanismo para ouvir se eventos específicos aconteceram no elemento.
document.addEventListener('DOMContentLoaded', () => { 
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const calcularBotao = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');


//função para calcular IMC
function calcularImc(){
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // mostra uma mensagem de erro se o resultado for inválido ou menor que 0
    if( isNaN(peso) || isNaN(altura) || altura <=0 | peso <=0){
        resultadoDiv.textContent = "insira um resultado válido!"
        return
    }


// calculo do imc = peso / (altura * altura)
    const imc = (peso / (altura * altura)).toFixed(2); // to fixed(2) formata para ficar com 2 casas decimais

//condições do resultado do peso IMC
let resultado_peso = "";
if (imc < 18.5){
    resultado_peso = "Abaixo do peso";
}else if(imc < 25){
    resultado_peso = "peso normal";
}else if(imc < 30){
    resultado_peso = "sobrepeso"
}else if(imc < 35){
    resultado_peso = "obesidade grau i"
}else if(imc < 40){
    resultado_peso = "obesidade grau ll"
}else {
    resultado_peso = "obesidade grau lll"
}


resultadoDiv.textContent = `Seu IMC é ${imc} e você está com ${resultado_peso}`;
}


calcularBotao.addEventListener('click', calcularImc);

});

