var naam_land = document.getElementById("naam_land");
var ex_port = document.getElementById("export");
var thuis = document.getElementById("thuis");
var seizoen = document.getElementById("seizoen");
var soort = document.getElementById("soort");
var gini = document.getElementById("gini");
var welzijn = document.getElementById("welzijn");
var bnp = document.getElementById("bnp");

var plaatje = document.getElementById("plaatje");
var plaatje2 =document.getElementById("plaatje2");

var kenia = document.getElementById("kenia");
kenia.addEventListener("click", keniaI);
var colombia = document.getElementById("colombia");
colombia.addEventListener("click", colombia_I);
var agrentinie = document.getElementById("agrentinie");
agrentinie.addEventListener("click", agrentinie_I);
var grand_texas = document.getElementById("grand_texas");
grand_texas.addEventListener("click", grand_texas_I);
var west_denemarken = document.getElementById("west_denemarken");
west_denemarken.addEventListener("click", west_denemarken_I);
var pizza = document.getElementById("pizza");
pizza.addEventListener("click", pizza_I);
var ivor = document.getElementById("ivor");
ivor.addEventListener("click", ivor_I);
var maroco = document.getElementById("maroco");
maroco.addEventListener("click", maroco_I);

function keniaI(){
  naam_land.innerHTML = "Kenia";
  ex_port.innerHTML = "Jouw haricots verts komen uit Kenia waar ze verbouwd worden";
  thuis.innerHTML = "Ze worden ook in Nederland verbouwd.";
  seizoen.innerHTML = "In Nederland groeien ze alleen in de zomermaanden dus komen ze de rest van het jaar uit Afrika, waar het altijd warm is.";
  soort.innerHTML = "Kenia is een periferie land met veel landbouw.";
  gini.innerHTML = "Het gini coëfficiënt van Kenia is 0.39.";
  welzijn.innerHTML = "Kenia staat op de 156e plaats op de VN welzijns index.";
  bnp.innerHTML = "In Kenia is het BNP/hoofd 1800 dollar en de koopkracht: 912 euro.";
  plaatje.src = "https://www.crossed-flag-pins.com/animated-flag-gif/gifs/Kenya_240-animated-flag-gifs.gif";
  seizoen.style.color = "#1ad8d8";
  soort.style.color = "#1ad8d8";
  gini.style.color = "#1ad8d8";
  welzijn.style.color = "#1ad8d8";
}
function colombia_I(){
  naam_land.innerHTML = "Colombia";
  ex_port.innerHTML = "Jouw koffie komt uit Colombia waar het verbouwd wordt";
  thuis.innerHTML = "Het kan niet in Nederland verbouwd worden";
  seizoen.innerHTML = "Koffie is een seizoens product in Colombia van april tot mei";
  soort.innerHTML = "Colombia is een semi-periferie land";
  gini.innerHTML = "Het gini coëfficiënt van Colombia is 0.53";
  welzijn.innerHTML = "Colombia staat op de 90e plaats op de VN welzijns index";
  bnp.innerHTML = "In Colombia is het BNP/hoofd 13,800 dollar";
  plaatje.src = "https://www.crossed-flag-pins.com/animated-flag-gif/gifs/Colombia_240-animated-flag-gifs.gif";
  seizoen.style.color = "black";
  soort.style.color = "black";
  gini.style.color = "black";
  welzijn.style.color = "black";
}
function agrentinie_I(){
  naam_land.innerHTML = "Argentinië";
  ex_port.innerHTML = "Jouw ossenhaas komt uit Argentinië.";
  thuis.innerHTML = "Nederland produceert ook rundvlees.";
  seizoen.innerHTML = "Het is geen seizoens product.";
  soort.innerHTML = "Argentinië is een semi-periferie land.";
  gini.innerHTML = "Het gini coëfficiënt van Argentinië is 0,42.";
  welzijn.innerHTML = "Argentinië staat op de 47e plaats op de VN welzijns index.";
  bnp.innerHTML = "In Argentinië is het BNP/hoofd 20.700 dollar.";
  plaatje.src = "https://www.crossed-flag-pins.com/animated-flag-gif/gifs/Argentina_240-animated-flag-gifs.gif";
  seizoen.style.color = "black";
  soort.style.color = "black";
  gini.style.color = "black";
  welzijn.style.color = "black";
}
function grand_texas_I(){
  naam_land.innerHTML = "VS";
  ex_port.innerHTML = "Jouw zoete aardappelen komen uit de VS.";
  thuis.innerHTML = "In Nederland verbouwen ze ook zoete aardappelen.";
  seizoen.innerHTML = "Het is een seizoens product, het is verkrijgbaar in oktober tot maart.";
  soort.innerHTML = "De VS is een centrum land.";
  gini.innerHTML = "Het gini coëfficiënt van de VS is 0,48.";
  welzijn.innerHTML = "De VS staat op de 13e plaats op de VN welzijns index.";
  bnp.innerHTML = "In de VS is het BNP/hoofd 59500 dollar.";
  plaatje.src = "https://www.crossed-flag-pins.com/animated-flag-gif/gifs/USA_240-animated-flag-gifs.gif";
  seizoen.style.color = "black";
  soort.style.color = "black";
  gini.style.color = "black";
  welzijn.style.color = "black";
}
function west_denemarken_I(){
  naam_land.innerHTML = "Nederland";
  ex_port.innerHTML = "Jouw cocktailsaus van Calvé, ijsberg sla, gerookte spekplakjes, slagroom, lange vingers komen uit Nederland.";
  thuis.innerHTML = "Maar we importeren ook producten uit het buitenland,";
  seizoen.innerHTML = "zoals zoete aardappelen en koffie.";
  soort.innerHTML = "Nederland is een centrum land.";
  gini.innerHTML = "Het gini coëfficiënt van Nederland is 0,28.";
  welzijn.innerHTML = "Nederland staat op de 4e plaats op de VN welzijns index.";
  bnp.innerHTML = "In Nederland is het BNP/hoofd 38.000 dollar.";
  plaatje.src = "https://www.crossed-flag-pins.com/animated-flag-gif/gifs/Netherlands_240-animated-flag-gifs.gif";
  seizoen.style.color = "black";
  soort.style.color = "black";
  gini.style.color = "black";
  welzijn.style.color = "black";
}
function pizza_I(){
  naam_land.innerHTML = "Italië";
  ex_port.innerHTML = "Jouw mascarpone komt uit Italië.";
  thuis.innerHTML = "In Nederland produceren we het niet.";
  seizoen.innerHTML = "Het is geen seizoens product.";
  soort.innerHTML = "Italië is een centrum land.";
  gini.innerHTML = "Het gini coëfficiënt van Italië is 0,35.";
  welzijn.innerHTML = "Italië staat op de 28e plaats op de VN welzijns index.";
  bnp.innerHTML = "In Italië is het BNP/hoofd 38.000 dollar.";
  plaatje.src = "https://www.crossed-flag-pins.com/animated-flag-gif/gifs/Italy_240-animated-flag-gifs.gif";
  seizoen.style.color = "black";
  soort.style.color = "black";
  gini.style.color = "black";
  welzijn.style.color = "black";
}
function ivor_I(){
  naam_land.innerHTML = "Ivoorkust";
  ex_port.innerHTML = "Jouw cacaobonen komen uit Ivoorkust.";
  thuis.innerHTML = "Ze groeien niet in Nederland, maar Amsterdam is wel één van de grooste cacaohavens. Hier wordt cacao verwerkt en opgeslagen en gaat vanuit hier naar vele landen.";
  seizoen.innerHTML = "Het is een seizoens product, oogst is van sept tot maart in Ivoorkust.";
  soort.innerHTML = "Ivoorkust is een periferie land.";
  gini.innerHTML = "Het gini coëfficiënt van Ivoorkust is 0,42.";
  welzijn.innerHTML = "Ivoorkust staat op de 170e plaats op de VN welzijns index.";
  bnp.innerHTML = "In Ivoorkust is het BNP/hoofd 3900 dollar.";
  plaatje.src = "https://www.crossed-flag-pins.com/animated-flag-gif/gifs/Cote-d-Ivoire_240-animated-flag-gifs.gif";
  seizoen.style.color = "black";
  soort.style.color = "black";
  gini.style.color = "black";
  welzijn.style.color = "black";
}
function maroco_I(){
  naam_land.innerHTML = "Marokko";
  ex_port.innerHTML = "Jouw gepelde garnalen komen uit de Noordzee maar worden gepeld in Marokko.";
  thuis.innerHTML = "Het kan ook in Nederland, maar dat is een stuk duurder.";
  seizoen.innerHTML = "Het is geen seizoens product.";
  soort.innerHTML = "Marokko is een semi-periferie land.";
  gini.innerHTML = "Het gini coëfficiënt van Marokko is 0,41.";
  welzijn.innerHTML = "Marokko staat op de 123e plaats op de VN welzijns index.";
  bnp.innerHTML = "In Marokko is het BNP/hoofd 8600 dollar.";
  plaatje.src = "https://www.crossed-flag-pins.com/animated-flag-gif/gifs/Morocco_240-animated-flag-gifs.gif";
  seizoen.style.color = "black";
  soort.style.color = "black";
  gini.style.color = "black";
  welzijn.style.color = "black";
}
alert("Hallo Wouter, welkom op mijn PO.");
alert("Je kunt informatie over de landen (met kleur) vinden door er op te klikken.")
alert("Groetjes Caszimir 2V1");
