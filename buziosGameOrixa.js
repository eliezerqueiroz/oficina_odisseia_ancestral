// Pedi pro Bing escrever um código que simule 
// o Jogo de búzios Africano e olha no que deu

// Criar um array com os nomes dos 16 orixás principais
var orixas = ["Exu", "Ogum", "Oxóssi", "Obaluaiê", "Xangô", "Oxum", "Iemanjá", "Oxalá", "Nanã", "Iansã", "Obá", "Ewá", "Logunedé", "Ossaim", "Ibeji", "Orunmilá"];

// Criar um array com 16 búzios, cada um com um valor booleano que indica se está aberto (true) ou fechado (false)
var buzios = [];

// Criar uma função que sorteia aleatoriamente os valores dos búzios
function sortearBuzios() {
  // Percorrer o array de búzios
  for (var i = 0; i < 16; i++) {
    // Gerar um número aleatório entre 0 e 1
    var numero = Math.random();
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

// Criar uma função que interpreta o resultado do sorteio e mostra o orixá correspondente
function mostrarOrixá() {
  // Chamar a função que sorteia os búzios
  sortearBuzios();
  // Chamar a função que conta quantos búzios estão abertos
  var abertos = contarBuziosAbertos();
  // Criar uma variável para armazenar o nome do orixá
  var orixá;
  // Usar uma estrutura switch para atribuir o orixá de acordo com o número de búzios abertos
  switch (abertos) {
    case 0:
      orixá = orixas[15]; // Orunmilá
      break;
    case 1:
      orixá = orixas[14]; // Ibeji
      break;
    case 2:
      orixá = orixas[13]; // Ossaim
      break;
    case 3:
      orixá = orixas[12]; // Logunedé
      break;
    case 4:
      orixá = orixas[11]; // Ewá
      break;
    case 5:
      orixá = orixas[10]; // Obá
      break;
    case 6:
      orixá = orixas[9]; // Iansã
      break;
    case 7:
      orixá = orixas[8]; // Nanã
      break;
    case 8:
      orixá = orixas[7]; // Oxalá
      break;
    case 9:
      orixá = orixas[6]; // Iemanjá
      break;
    case 10:
      orixá = orixas[5]; // Oxum
      break;
    case 11:
      orixá = orixas[4]; // Xangô
      break;
    case 12:
      orixá = orixas[3]; // Obaluaiê
      break;
    case 13:
      orixá = orixas[2]; // Oxóssi
      break;
    case 14:
      orixá = orixas[1]; // Ogum
      break;
    case 15:
      orixá = orixas[0]; // Exu
      break;
    case 16:
      orixá = "nenhum"; // Nenhum orixá
      break;
    default:
      orixá = "inválido"; // Resultado inválido
  }
  // Mostrar o resultado na tela
  console.log("O número de búzios abertos é: " + abertos);
  console.log("O orixá que responde é: " + orixá);
}

// Chamar a função que mostra o orixá
mostrarOrixá();
