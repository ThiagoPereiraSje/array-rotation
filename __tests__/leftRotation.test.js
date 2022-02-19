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
  test("When A value is NULL should be return 'A value cannot be NULL'", () => {
    expect(() => leftRotation(null, 10)).toThrow("A value cannot be NULL");
  });

  test("When A value is UNDEFINED should be return 'A value cannot be NULL'", () => {
    expect(() => leftRotation(undefined, 10)).toThrow("A value cannot be NULL");
  });

  test("When A value is [] should be return 'A value cannot be []'", () => {
    expect(() => leftRotation([], 10)).toThrow("A value cannot be []");
  });

  test("When D value is NULL should be return 'D value cannot be NULL'", () => {
    expect(() => leftRotation([1, 2, 3, 4, 5], null)).toThrow(
      "D value cannot be NULL"
    );
  });

  test("When D value is UNDEFINED should be return 'D value cannot be NULL'", () => {
    expect(() => leftRotation([1, 2, 3, 4, 5], undefined)).toThrow(
      "D value cannot be NULL"
    );
  });

  test("When D value is 0 should be return 'D value cannot be NULL'", () => {
    expect(() => leftRotation([1, 2, 3, 4, 5], 0)).toThrow(
      "D value cannot be NULL"
    );
  });

  test("When A is [1, 2, 3, 4, 5] and D is 1 should be return '2 3 4 5 1'", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 1)).toEqual("2 3 4 5 1");
  });

  test("When A is [1, 2, 3, 4, 5] and D is 2 should be return '3 4 5 1 2'", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 2)).toEqual("3 4 5 1 2");
  });

  test("When A is [1, 2, 3, 4, 5] and D is 3 should be return '4 5 1 2 3'", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 3)).toEqual("4 5 1 2 3");
  });

  test("When A is [1, 2, 3, 4, 5] and D is 4 should be return '5 1 2 3 4'", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 4)).toEqual("5 1 2 3 4");
  });

  test("When A is [1, 2, 3, 4, 5] and D is 5 should be return '1 2 3 4 5'", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 5)).toEqual("1 2 3 4 5");
  });

  test("When A is [1, 2, 3, 4, 5] and D is 6 should be return '2 3 4 5 1'", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 6)).toEqual("2 3 4 5 1");
  });

  test("When A is [1, 2, 3, 4, 5] and D is 781 should be return '2 3 4 5 1'", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 781)).toEqual("2 3 4 5 1");
  });

  test("When A is [1, 2, 3, 4, 5, 6, 7] and D is 781 should be return '5, 6, 7, 1, 2, 3, 4'", () => {
    expect(leftRotation([1, 2, 3, 4, 5, 6, 7], 781)).toEqual("5 6 7 1 2 3 4");
  });
});
