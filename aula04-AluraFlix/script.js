let listaJogos = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbc9nrVf1_I06uV6KgipPIxd3oahHpUiuPWw&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bd5vzECWFo2PGInbPhOw6J0m0_OtU5IOjA&usqp=CAU',
'https://theme.zdassets.com/theme_assets/43400/87a1ef48e43b8cf114017e3ad51b801951b20fcf.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7qXfeytWFLIHXIVq9TY_BRXn9z65Aq-SXA&usqp=CAU'
]

listaJogos.forEach((item, pos) => document.getElementById("jogos").innerHTML += `<img src=${listaJogos[pos]}>`);

let newGames = document.getElementById("newGames");

newGames.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (listaJogos.indexOf(newGames.value) > -1){
    newGames.value = ""
    alert("Esse jogo ja existe na lista");
  } else if (event.keyCode == 13){
    document.getElementById("jogos").innerHTML += `<img src=${newGames.value}>`;
  }
})
