var campoResultado = document.getElementById("resultado");

function CPraF(){
  var c = document.getElementById("valorInputado").value;
  if (c == "") c = 0;
  var f = (c * 1.8 + 32).toFixed(1)
  campoResultado.innerHTML = `${c} °C é equivalente a ${f} °F.`
}

function FPraC(f){
  var f = document.getElementById("valorInputado").value;
  if (f == "") f = 0;
  var c = ((f - 32) * (5/9)).toFixed(1);
  campoResultado.innerHTML = `${f} °F é equivalente a ${c} °C`
}

let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");
let C = cel.value, F = fah.value, K = kel.value;

cel.addEventListener("keyup", function(event){
  C = Number(cel.value);
  F = (C * 1.8 + 32).toFixed(2);
  K = (C + 273.15).toFixed(2);
  fah.value = F;
  kel.value = K
  
});

fah.addEventListener("keyup", function(event){
  console.log(fah.value);
  F = Number(fah.value);
  C = (F - 32) * (5/9);
  K = C + 273.15;
  cel.value = C.toFixed(2);
  kel.value = K.toFixed(2);
})

kel.addEventListener("keyup", function(event){
  K = Number(kel.value);
  C += 273.15;
  F = (K - 273.15) * 9/5 + 32;
  cel.value = C.toFixed(2);
  fah.value = F.toFixed(2);
})
