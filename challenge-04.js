/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
 
let isTruthy = function(param) {
    if(param) {
        return true;
    }
    return false;
}

/* let isTruthy = function(param) {
    return param ? true : false;
} */

/* let isTruthy = function(param) {
    return !!param;
} */

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(null);
isTruthy(undefined);
isTruthy('');
isTruthy(0)
isTruthy(NaN);
isTruthy([])

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(' ');
isTruthy(1);
isTruthy('teste')
isTruthy(-1)


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

let carro = {
    marca: 'ford',
    modelo: 'titanium',
    placa: 1234,
    ano: 2021,
    cor: 'preto',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudaCor = function(nova_cor) {
    carro.cor = nova_cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function() {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function() {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function() {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function() {
    return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionaPessoa = function(quantidade) {
    let sobrando = 5 - carro.quantidadePessoas
    let passageiros = 'pessoas'

    if (carro.quantidadePessoas == 5) {
        console.log('O carro já está lotado!')

    } else if (quantidade > carro.assentos) {
        console.log('A quantidade máxima de pessoas permitidas no momento é ' + sobrando)

    } else if (quantidade > sobrando) {
        if (sobrando == 1) {
            passageiros = 'pessoa'
        }
        console.log('Só cabem mais ' + sobrando + ' ' + passageiros)

    } else {
        carro.quantidadePessoas+=quantidade;
    }
    
    console.log('Já temos ' + carro.quantidadePessoas + ' pessoas no carro!')
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/
console.log(carro.obterCor());


// Mude a cor do carro para vermelho.
carro.mudaCor('vermelho');

// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Mude a cor do carro para verde musgo.

carro.mudaCor('verde musgo');

// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.
carro.adicionaPessoa(2);

// Adicione mais 4 pessoas no carro.
carro.adicionaPessoa(4);

// Faça o carro encher.
carro.adicionaPessoa(3);

// Tire 4 pessoas do carro.
carro.quantidadePessoas-=4;

// Adicione 10 pessoas no carro.
carro.adicionaPessoa(10);

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);