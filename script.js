//Criar uma função que exibe a quantidade de *
//que aquela linha possui
//1° caso
//exibirAsteriscos(10);

//function exibirAsteriscos(linhas) {
//  let padrao = '';
//  for (let linha = 1; linha <= linhas; linha++) {
//      padrao += '*';
//      console.log*(padrao);
//  }
//}
//2° caso
exibirAsteriscos(10);

function exibirAsteriscos(linhas) {

  for (let linha=1; linha <= linhas; linha++) {
    let padrao = '';
    //loop interior ou nestado
    for (let i = 0; i<linha; i++) {
      padrao += '*';
    }
    console.log(padrao);
  }
}