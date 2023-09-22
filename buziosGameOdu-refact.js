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
// Criar uma função que sorteia aleatoriamente os valores dos búzios
function sortearBuzios() {
  const buzios = [];
  // Percorrer o array de búzios
  for (let i = 0; i < 16; i += 1) {
    // Gerar um número aleatório entre 0 e 1
    let numero = Math.floor(Math.random() * 2);
    // Se o número for menor que 1, o búzio está aberto
    // if (numero) {
      buzios.push(numero);
    // } else { 
      // Se não, o búzio está fechado
      // buzios.push(0);
    // }
  }
  // console.log(buzios.length);
  return buzios;
}

// Criar uma função que conta quantos búzios estão abertos
function contarBuziosAbertos(buzios) {
  // Criar uma variável para armazenar o contador
  let contador = 0;
  // Percorrer o array de búzios
  for (let i = 0; i < 16; i += 1) {
    // Se o búzio está aberto, incrementar o contador
    if (buzios[i]) {
      contador += 1;
    }
  }
  // Retornar o contador
//   console.log(contador);
  return contador;
}

// Criar uma função que interpreta o resultado do sorteio e mostra o ODU correspondente
function mostrarODU(odus) {
  // Chamar a função que sorteia os búzios
  const buziosArray = sortearBuzios();
  // Chamar a função que conta quantos búzios estão abertos
  const abertos = contarBuziosAbertos(buziosArray);
  // Mostrar o resultado na tela
  console.log(`búzios:${buziosArray.length}`);
  console.log(`O número de búzios abertos é:${abertos}`);
  // console.log(`O ODU que responde é: ${odu}`); 
  console.log(`O ODU que responde é: ${odus[abertos]}`);
}

// Chamar a função que mostra o ODU
mostrarODU(odus);
