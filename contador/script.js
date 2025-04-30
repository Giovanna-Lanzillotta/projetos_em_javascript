// elemento onde o valor do contador vai ser exibido
const valorContadorElemento = document.getElementById('valor-do-contador')

//botões para incrementar e decrementar
const botaoIncrementar = document.getElementById('incrementar')
const botaoDecrementar = document.getElementById('decrementar')

// valor inicial do contador
let contador = 0;

//Inicio do valor do contador
function Contador() {
    valorContadorElemento.textContent = contador;
}

// Ao clicar no botão de incrementar adicionar + 1
botaoIncrementar.addEventListener('click',function(){
    contador++;
    Contador(); // atualiza o dado a ser exibido
})

// Ao clicar no botão de decrementar diminui - 1
botaoDecrementar.addEventListener('click',function(){
    contador--;
    Contador();
})

Contador();