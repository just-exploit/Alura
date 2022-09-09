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
  var numUser = document.getElementById("number").value;
  console.log(numAl)
  tentativas += 1;
  console.log(tentativas)
  if (numUser == ""){
    alert("Digite um valor.");
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

resetar.addEventListener("click", reset());

// STILIZAR O SITE, GG
