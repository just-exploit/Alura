function fazGet(url){
  let request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();
  return request.responseText;
}

function mostrar(){
  
}

function calc(){
  let inpVal = Number(document.querySelector('#inpVal').value);
  let st1 = document.querySelector("#Moedas1");
  let m1 = st1.options[st1.selectedIndex].value;
  let st2 = document.querySelector("#Moedas2");
  let m2 = st2.options[st2.selectedIndex].value;
  console.log(m1, m2, inpVal);
  
  if (m1 == "default" || m2 == "default"){
    alert("Por favor, selecione uma moeda ")
  } else{
    let data = fazGet(`https://api.exchangerate.host/latest?/source=ecb&base=${m1}&amount=${inpVal}`);
    let valores = JSON.parse(data)
    let res = document.querySelector("#resultado");
    let resP = document.querySelector('#resultadoP');
    res.innerHTML = Number(valores.rates[m2]).toFixed(2);
    
    let dataReal = fazGet(`https://api.exchangerate.host/convert?/source=ecb&from=${m1}&to=${m2}&amount=1`)
    let valorReal = JSON.parse(dataReal);
    resP.innerHTML = `1 ${m1} equivale a ${Number(valorReal.result).toFixed(2)} ${m2}`;
  }
}
