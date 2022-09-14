let lista = [];
let listaNome = [];
let div = document.getElementById("listaFilmes");

function checaUrl(){
  let url = document.getElementById("filme");
  let nome = document.getElementById("nome");
  
  if (nome.value == "" || filme.value == ""){
    alert("É obrigatório o preenchimento dos dois campos");
    nome.value = "";
    url.value = "";
  }else if (lista.indexOf(url.value) > -1 || listaNome.indexOf(nome.value) > -1) {
    console.log(lista.indexOf(url.value))
    alert("Esse filme já esta na lista");
    console.log(url.value)
  }else if (url.value.endsWith(".jpg") || url.value.endsWith(".png") || url.value.endsWith(".jpeg") ){
    lista.push(url.value);
    listaNome.push(nome.value);
    mostrarFilme(url.value, nome.value);
  } else{
    alert("Digite um link de imagem válido!");
  }
  url.value = ""
}

function mostrarFilme(url, name){
  div.innerHTML += `<h2>${name}</h2>`
  div.innerHTML += `<img src=${url}>`;
}

function limparLista(){
  lista = [];
  listaNome = [];
  div.innerHTML = "";
}

function removerFilme(){
  let nome = document.getElementById("nome").value;
  
  if (nome == "") {
    alert("É necessário o nome do filme para removê-lo "); 
  }else if (listaNome.indexOf(nome) == -1){
    alert("Este nome não esta na lista.")
  }else{
    let ind = listaNome.indexOf(nome);
    lista.splice(ind, ind + 1);
    listaNome.splice(ind, ind + 1);
    atualizarFilmes();
  }
}

function atualizarFilmes(){
  div.innerHTML = "";
  listaNome.forEach((item, index) =>{
    div.innerHTML += `<h2>${listaNome[index]}</h2>`;
    div.innerHTML += `<img src=${lista[index]}>`;
  });
}

filme.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.keyCode == 13){
    checaUrl();
  }
})

