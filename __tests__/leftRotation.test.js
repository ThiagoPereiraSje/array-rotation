/*
Uma operação de rotação à esquerda em uma matriz desloca cada um dos elementos da matrizunidade 
à esquerda. Por exemplo, se 2 rotações à esquerda são realizadas na matriz [1,2,3,4,5], então a 
matriz se tornaria [3,4,5,1,2].

Observe que o item de índice mais baixo se move para o índice mais alto em uma rotação. Isso é chamado de 
matriz circular.

Dada uma matriz 'A' de 'N' inteiros e um número, 'D', executar 'D' rotações para a esquerda 
na matriz. Retorne a matriz atualizada a ser impressa como uma única linha de inteiros 
separados por espaço.

*/

import { leftRotation } from "../src/leftRotation";

describe("Left Rotation", () => {
  test("When A is [1, 2, 3, 4, 5] and D is 2 should be return '3 4 5 1 2'", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 2)).toEqual("3 4 5 1 2");
  });
});
