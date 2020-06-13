/*
Escreva um programa que faça sete chamadas a console.log() 
para retornar o seguinte triângulo:
#
##
###
####
#####
######
######
*/

var value = [];
const theTriangle = (key, ...value) => {
  while (key <= 7) {
    value += "#";
    key++;
    console.log(value);
  }
};
const key = 1;
theTriangle(key);
