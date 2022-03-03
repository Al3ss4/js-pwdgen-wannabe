// prompt per chiedere il nome
var nome = prompt ( 'Qual è il tuo nome?');

//console.log(nome);


// prompt per chiedere il nome
var cognome = prompt ( 'Qual è il tuo cognome?');

//console.log(cognome);


// prompt per chiedere il colore preferito
var colore = prompt ( 'Qual è il tuo colore preferito?');

//console.log(colore);


// password (in)sicura
var password = ( nome + cognome + colore +21 ); 

console.log( password );


//password insicura HTML
document.getElementById('psw').innerHTML = ' La tua password è ' + password ;

