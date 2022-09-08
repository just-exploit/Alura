var campoResultado = document.getElementById("resultado");

function Converter(){
  var celsius = document.getElementById("valorInputado").value;
  
  if (celsius == "") celsius = 0;
  
  var fahrenheit = (celsius * 1.8 + 32).toFixed(1)
  
  campoResultado.innerHTML = `${celsius} °C é equivalente a ${fahrenheit} °F.`
}
