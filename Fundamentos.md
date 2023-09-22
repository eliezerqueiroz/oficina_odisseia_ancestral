**Oficina de Programação - Parte 2: Fundamentos de Programação**

**Duração:** 50 minutos.

**Editor online:** [Playcode - Online Javascript Editor](https://playcode.io/1598832).

**Repositorio:** [Oficina odisseia ancestral](https://github.com/eliezerqueiroz/oficina_odisseia_ancestral/tree/main)

**Script:**

1. **Revisão Rápida do Código** *(5 minutos)*
   - Apresentação do código fornecido, destacando as variáveis e funções principais.
   - Exemplo: Vamos exibir o array `odus` com os nomes dos 16 ODUS principais no console.
   ```javascript
   console.log("Lista de ODUS principais: ", odus);
   ```

2. **Trabalhando com Arrays** *(10 minutos)*
   - Vamos explorar o array `odus` que armazena os nomes dos 16 ODUS principais.
   - Exemplo: Como acessar e exibir o terceiro ODU da lista.
   ```javascript
   var terceiroOdu = odus[2];
   console.log("O terceiro ODU é: " + terceiroOdu);
   ```
   - Exercício: Peça aos participantes para acessarem outros ODUS da lista.

3. **Estruturas de Repetição** *(10 minutos)*
   - Introdução à estrutura de repetição `for`.
   - Vamos analisar como a função `sortearBuzios()` utiliza um loop `for` para preencher o array `buzios`.
   - Exemplo: Explique como o loop funciona e mostre o array `buzios` após o sorteio.
   ```javascript
   sortearBuzios();
   console.log("Búzios sorteados: ", buzios);
   ```
   - Exercício: Peça aos participantes para criar um loop `for` que realize uma tarefa simples.

4. **Estruturas de Decisão** *(10 minutos)*
   - Explicação da estrutura `if...else`.
   - Analisaremos como a função `sortearBuzios()` usa `if...else` para determinar se um búzio está aberto ou fechado.
   - Exemplo: Vamos mostrar como um búzio individual é classificado como aberto ou fechado.
   ```javascript
   var primeiroBuzio = buzios[0];
   if (primeiroBuzio) {
     console.log("O primeiro búzio está aberto.");
   } else {
     console.log("O primeiro búzio está fechado.");
   }
   ```
   - Exercício: Peça aos participantes para criar uma estrutura `if...else` que tome uma decisão com base em uma condição.

5. **Funções e Modularidade** *(10 minutos)*
   - Discussão sobre a importância de dividir o código em funções reutilizáveis.
   - Análise das funções `sortearBuzios()` e `contarBuziosAbertos()`.
   - Exemplo: Chamada das funções e exibição do resultado.
   ```javascript
   sortearBuzios();
   var búziosAbertos = contarBuziosAbertos();
   console.log("Número de búzios abertos: " + búziosAbertos);
   ```
   - Exercício: Peça aos participantes para criar uma função simples que execute uma tarefa específica.

6. **Aplicação Prática - Mostrar ODU** *(5 minutos)*
   - Exploraremos a função `mostrarODU()` e como ela combina todos os conceitos aprendidos até agora.
   - Rodaremos a função para ver o resultado.

7. **Conclusão e Perguntas** *(5 minutos)*
   - Resumo dos principais conceitos abordados.
   - Oportunidade para perguntas e esclarecimentos.

**Desafio Extra:** Peça aos participantes para modificarem algo no código. Por exemplo alterar a função `mostrarODU()` para que, além de mostrar o resultado o ODU também exibir o seu significado.

Lembre-se de incentivar a participação ativa dos alunos, fazer perguntas para verificar a compreensão e proporcionar oportunidades para a prática dos conceitos apresentados.