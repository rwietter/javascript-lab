for (var current = 20; ; current++) {
  if (current % 7 == 0) {
    break;
  }
}
console.log(current);
// → 21

/*
A construção do for nesse exemplo não contém
a parte que checa pelo fim do loop. Isso
significa que o loop não vai parar de
executar até que a declaração break
contida nele seja execut
*/
