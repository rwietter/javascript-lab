let name = "harry";
let text = "Harry is a suspicious character";
let regexp = new RegExp(`\\b(${name})\\b`, "gi");
console.log(text.replace(regexp, "_$1_"));

/*
 Ao criar os marcadores \b de limite, precisamos usar duas
 barras invertidas, porque as estamos gravando em uma string
 normal, não em uma expressão regular fechada. O segundo
 argumento para o construtor RegExp, ele contém as opções para
 a expressão regular - nesse caso, "gi" global e sem distinção 
 entre maiúsculas e minúsculas.
*/

// com caracteres
name = "dea+hl[]rd";
text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
regexp = new RegExp(`\\b${escaped}\\b`, "gi");
let repleced = text.replace(regexp, " _$&_ ");
console.log(repleced);
