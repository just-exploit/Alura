var but1 = document.querySelector("#firstOption");
but1.setAttribute("disabled", "");

var but2 = document.querySelector("#secondOption");

var selected = but1;

function MudarCalc(pressed, notPressed){
  pressed.setAttribute("disabled", "");
  notPressed.removeAttribute("disabled");
  selected = pressed
}

function KmToAl(km){
  // tempo = distancia ÷ velocidade 
  var segundosLuz = (km / 300000).toFixed(1);
  // Anos = tempo ÷ segundosEm1Ano
  var anosLuz = (segundosLuz / 31557600).toFixed(1);
  // Meses = SegundosLuz ÷ SegundosEm1Mes
  var mesesLuz = (segundosLuz / 2628000).toFixed(1);
  // Dias = SegundosLuz ÷ SegundosEm1Dia
  var diasLuz = (segundosLuz / 86400).toFixed(1);
  // Horas = SegundosLuz ÷ SegundosEm1Hora
  var horasLuz = (segundosLuz / 3600).toFixed(1);
  // MOSTRANDO NA TELA
  document.querySelector("#resultado").innerHTML = `${km} Km é o equivalente a:<br>${anosLuz} anos-luz,<br>${mesesLuz} meses-luz,<br>${diasLuz} dias-luz,<br>${horasLuz} horas-luz<br> e ${segundosLuz} segundos`;
  
}
function AlToKm(anosLuz){
  var anosLuz = document.querySelector("#inputValor").value;
  var km = anosLuz * 9461e+12;
  document.querySelector("#resultado").innerHTML = `${anosLuz} anos-luz é o equivalente a ${km} Km.`
}
function Calcular(){
  var valor = document.querySelector("#inputValor").value;
  
  if (valor.length == 0){
    alert("Por favor, insira um valor a ser calculado");
  } else{
    if (selected == but1) {
      KmToAl(valor);
    } else{
      AlToKm(valor);
    }
  }
}
