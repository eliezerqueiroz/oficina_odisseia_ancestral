// Tabela de advinhação DEV
// Os ODevs são estados probabilisticos da sua energia DEV
// Existem 16 Odevs principais, descubra o seu
// 

// Criar 4 variáveis que representam búzios
let buzio1 = Math.floor(Math.random() * 2); // Gerar um valor aleatório entre 0 e 1
let buzio2 = Math.floor(Math.random() * 2);
let buzio3 = Math.floor(Math.random() * 2);
let buzio4 = Math.floor(Math.random() * 2);

// Exibir a combinação gerada pelos búzios
console.log(`A combinação dos búzios é: ${buzio1} ${buzio2} ${buzio3} ${buzio4}`);

// ----------- Refatorando ---------------
const tabuleiro = [0, 1, 0, 1];

for (let buzio = 0; buzio < tabuleiro.length; buzio += 1) {
    tabuleiro[buzio] = Math.floor(Math.random() * 2);
}

console.log(tabuleiro);

// criar a ideia de "rodada", cada rodada um DEV joga os búzos para descobrir o seu caminho DEV 
// e depois faz uma pergunta e joga novamente para receber uma resposta

//criar a possibilidade de aumentar a quantidade de búzios no jogo
