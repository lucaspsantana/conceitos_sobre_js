//Conceito de Função - declarar função 
//criei a função finalizarChat e coloquei a chamada api dentro
//funções podem receber parâmetros, que é o que está entre parênteses, neste caso eu tenho que receber dois parâmetros qualquer
//o nome do parâmetro pode ser qualquer um 
//a função pode retornar alguma coisa ou retornar nada
// as que retornem sempre tem um palavra chamada return, geralmente no final

function finalizarChat(chatID, token) {

    //conceito de API
    //chamada api da huggy, aqui é só copiar e colar e colocar o chatID e token no lugar correto
    // tudo que está entre aspas simples ou duplas são chamados de string, strings são textos
    //existe algo chamado concatenação de string
    // que é quando você pega um texto qualquer e junta a outro já existente 
    // para concatenar faça isso:
    // strng exemplo -> var nome = "Lucas Santana";
    //string que será cocatnada  a outra -> var sobrenome = "Pereira;"
    //cocatenação no meio ->    var nome = "Lucas "+ sobrenome + "Santana"
    //cocatenação no no começo ->    var nome = sobrenome + "Lucas Santana"
    //cocatenação no no final ->    var nome = "Lucas Santana"+ sobrenome 

    var request = new XMLHttpRequest();

    request.open('POST', 'https://api.huggy.io/v2/chats/' + chatID + '/close');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('X-Authorization', 'Bearer ' + token);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
    };

    var body = {
        'sendFeedback': true
    };

    request.send(JSON.stringify(body));
}

//conceito de tipo de dados - tipo de dado Array
//este é o chamado array, ele guarda diversos elementos dentro
//os elementos ficam dentro do colchetes e são separados por virgulas
//array pode ser chamado de lista, pois o comportamento é parecido a uma lista mesmo em que casa um tem a sua posição
//a primeira posição em programação não é 1 e sim 0

var chats = [1234567, 5455215564, 45454545];

//conceito de tipo de dados - tipo de dado int
//este é um outro tipo de elemento, não é string, nem array, é um int, que são número inteiros, por isso não tem aspas
//aqui representa a primeira posição do array 
var i = 0;

//conceito de funções - função reservada - função length
//essa variável também se chama var, pois recebe um inteiro, que é o tamenho do array 'tamanho'
//length é um função que retorna o tamanho de um array, ele é uma função nativa, então você não precisa implementar, só chamá-la
//da forma que eu chamo aqui
//O tamnho do array é a quantidade de elementos que ele tem, neste caso temos 3

var tamanho = chats.length;

//conceito de tipo de dados - tipo de dado string 

var token = "156454151212124djjewbvedsvf4ds4v5sdv4dsfv"; //este é o token da api, que é uma string, já que tem aspas 

//Conceito de laço de repetição 
//este é o chamado laço de repetição, que cria o loop, existe também o for
//O while faz o que está entre as chaves enquanto a condição que está dentro dos parênteses for atendida
//neste caso, ele verifica se i é menor que tamanho

while (i < tamanho) {

    //Conceito de array - acessar elemento do array
    //deste jeito que pegamos um elemento em determinada posição do array
    //se eu quiser pegar o elemento 1234567, por exemplo, tenho que fazer assim var chatNaPosicaoI = chats[0];

    var chatNaPosicaoI = chats[i];

    // conceito de função - invocar/chamar função 
    //aqui é onde chamamos/invocamos a função, ou seja é o momento que ela vai ser executada, antes ela apenas foi declarada
    //passo elemento contido no array e o token 

    finalizarChat(chatNaPosicaoI, token);

    //conceito de iteração 
    //depois eu itero a variável i, ou seja somo ela com 1
    //pode ser escirta de uma outras formas tbm:
    // i = i + i  essa é
    //i =+1
    //Significa que eu pego o valor que está em um e somo mais um 

    i++;
}
