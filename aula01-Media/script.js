function Verificar(){
  var nota1 = Number(document.getElementById("nota1").value);
  var nota2 = Number(document.getElementById("nota2").value);
  var nota3 = Number(document.getElementById("nota3").value);
  var nota4 = Number(document.getElementById("nota4").value);
 
  if (nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){
    alert("Preencha os campos solicitados")
  } else{
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 ||nota3 < 0 || nota3 > 10 ||nota4 < 0 || nota4 > 10){
      alert("[Error] Insira um valor entre 0 e 10")
    } else{
      var resultado = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1);
      document.getElementById("resultado").innerHTML = `Sua média foi: ${resultado}. `
      if (resultado >= 7.0){
        document.getElementById("resultado").innerHTML += "VOCÊ PASSOU!"
      } else{
        document.getElementById("resultado").innerHTML += "VOCÊ REPROVOU!"
      }
    }
 }
}
