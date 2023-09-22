// Criar um array com os nomes dos 16 ODUS principais
const odus = [
  'Okanran', //Mistério, o desconhecido
  'Ejiokô', //Dualidade, oposição, dualidade da vida
  'Etá Ogundá', //Aprendizado, conhecimento, sabedoria
  'Irossun',//Luz, inspiração, esclarecimento
  'Oxê',//Paciência, perseverança, espera
  'Obará',//Armadilha, obstáculo
  'Odi',//Transformação pessoal, mudança
  'Ejioníle',//Início, origem, princípio
  'Ossá',//Dificuldade, desafio, superação
  'Ofun',//Riqueza, abundância, prosperidade
  'Owarin',//Divisão, separação, discordância
  'Ejilaxeborá',//Equilíbrio, justiça, correção
  'Ejiologbon',//Introspecção, reflexão, sabedoria
  'Iká',//Revolução, transformação, reviravolta
  'Obeogundá',//Amor, compaixão, empatia
  'Ejibê ou Aláfia',//Realização, sucesso, êxito
];
// Criar um array com 16 búzios, cada um com um valor booleano que indica se está aberto (true) ou fechado (false)
const buzios = [];

// Criar uma função que sorteia aleatoriamente os valores dos búzios
function sortearBuzios() {
  // Percorrer o array de búzios
  for (let i = 0; i < 16; i++) {
    // Gerar um número aleatório entre 0 e 1
    let numero = Math.random();
    // Se o número for menor que 0.5, o búzio está aberto
    if (numero < 0.5) {
      buzios[i] = true;
    }
    // Se o número for maior ou igual a 0.5, o búzio está fechado
    else {
      buzios[i] = false;
    }
  }
}

// Criar uma função que conta quantos búzios estão abertos
function contarBuziosAbertos() {
  // Criar uma variável para armazenar o contador
  var contador = 0;
  // Percorrer o array de búzios
  for (var i = 0; i < 16; i++) {
    // Se o búzio está aberto, incrementar o contador
    if (buzios[i]) {
      contador++;
    }
  }
  // Retornar o contador
  return contador;
}

// Criar uma função que interpreta o resultado do sorteio e mostra o ODU correspondente
function mostrarODU() {
  // Chamar a função que sorteia os búzios
  sortearBuzios();
  // Chamar a função que conta quantos búzios estão abertos
  var abertos = contarBuziosAbertos();
  // Criar uma variável para armazenar o nome do ODU
  var odu;
  // Usar uma estrutura switch para atribuir o ODU de acordo com o número de búzios abertos
  switch (abertos) {
    case 0:
      odu = odus[15]; // Ejibê ou Alafia
      break;
    case 1:
      odu = odus[0]; // Okanran
      break;
    case 2:
      odu = odus[1]; // Ejiokô
      break;
    case 3:
      odu = odus[2]; // Etá Ogundá
      break;
    case 4:
      odu = odus[3]; // Irossun
      break;
    case 5:
      odu = odus[4]; // Oxê
      break;
    case 6:
      odu = odus[5]; // Obará
      break;
    case 7:
      odu = odus[6]; // Odi
      break;
    case 8:
      odu = odus[7]; // Ejioníle
      break;
    case 9:
      odu = odus[8]; // Ossá
      break;
    case 10:
      odu = odus[9]; // Ofun
      break;
    case 11:
      odu = odus[10]; // Owarin
      break;
    case 12:
      odu = odus[11]; // Ejilaxeborá
      break;
    case 13:
      odu = odus[12]; // Ejiologbon
      break;
    case 14:
      odu = odus[13]; // Iká
      break;
    case 15:
      odu = odus[14]; // Obeogundá
      break;
    case 16:
      odu = "nenhum"; // Nenhum ODU
      break;
    default:
      odu = "inválido"; // Resultado inválido
  }
  // Mostrar o resultado na tela
  console.log(`O número de búzios abertos é:${abertos}`);
  console.log(`O ODU que responde é: ${odu}`);
}

// Chamar a função que mostra o ODU
mostrarODU();