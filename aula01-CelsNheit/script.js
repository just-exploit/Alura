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

