var resetar = document.querySelector("#resetButton");
var res = document.getElementById("resultado");
var numAl = parseInt(Math.random(10)*11);
var tentativas = 0;

function reset(){
  tentativas = 0;
  numAl = parseInt(Math.random(10)*11);
  res.innerHTML += "<br>Um novo número aleatório criado"
  setTimeout(() => { res.innerHTML = "";}, 3000)
}

function Chutar(){
  var numUser = parseInt(document.getElementById("number").value);
  
  tentativas += 1;
  
  if (numUser == ""){
    alert("Digite um valor.");
  } else if (numUser > 10 || numUser < 0){
    res.innerHTML = "Valor inválido! digite um número entre 0 e 10";
  } else if (numUser != numAl && tentativas == 3){
    res.innerHTML = "Você PERDEU, meu número era " + numAl;
    reset();
  } else if (numUser == numAl){
    res.innerHTML = "Acertou!";
    reset();
  } else if (numUser < numAl){
    res.innerHTML = "Errou. Tente um número MAIOR";
  } else{
    res.innerHTML = "Errou. Tente um número MENOR.";
  }
}

// STILIZAR O SITE, GG
