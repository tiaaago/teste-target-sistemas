/* INFORME A STRING DESEJADA ABAIXO */
const string = 'DEFINA AQUI A STRING DESEJADA';

/* NÃO MODIFIQUE O CODIGO ABAIXO */
const stringArray = string.split('');
let stringInvertida = '';

for (let i = stringArray.length - 1; i >= 0; i--) {
    stringInvertida = `${stringInvertida}${stringArray[i]}`;

    if (i == 0) {
        console.log(stringInvertida);
    }
}