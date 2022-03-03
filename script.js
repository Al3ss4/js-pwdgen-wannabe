// prompt per chiedere il nome
var nome = prompt ( 'Qual è il tuo nome?');

console.log(nome);

// prompt per chiedere il nome
var cognome = prompt ( 'Qual è il tuo cognome?');

console.log(cognome);


// prompt per chiedere il colore preferito
var colore = prompt ( 'Qual è il tuo colore preferito?');

console.log(colore);

// password (in)sicura
console.log( nome + cognome + colore + 21);

//password insicura HTML
document.getElementById('psw').innerHTML = ' La tua password è ' + nome + cognome + colore + 21; 