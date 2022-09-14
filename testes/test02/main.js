let request = new XMLHttpRequest();
request.open('GET', 'https://api.ipify.org/?format=json', false);
request.send();
let resposta = request.responseText;
let jsonVal = JSON.parse(resposta);
let h1 = document.querySelector("h1");
h1.innerHTML = jsonVal.ip;

let xml = new XMLHttpRequest();
xml.open('GET', 'https://api64.ipify.org/?format=json', false);
xml.send();
let recebido = xml.responseText;
let dict = JSON.parse(recebido);
let h2 = document.querySelector("h2");
h2.innerHTML = dict.ip;
