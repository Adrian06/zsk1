var tekst = "ZSK - Zespół Szkół Komunikacji";
console.log(tekst.length); //30

var pierwszy = tekst.charAt();
console.log(pierwszy); //Z

var ostatni = tekst.charAt(tekst.length - 1);
console.log(ostatni); //i

//document.write(tekst.charAt(11)); //ł

//ASCII
document.write(tekst.charCodeAt(0)); //Z - 90
document.write(tekst.charCodeAt(14)); //z - 122

//Zamiana na duże litery
var duze = tekst.toUpperCase();
var male = tekst.toLowerCase();
console.log(male);

//cammelCase zapis zmiennej
var duzaMale = tekst.charAt(0).toUpperCase() + tekst.slice(1).toLowerCase();
console.log(duzaMale);

//Użytkownik wprowadza z klawiatury swoje imię. Zamień 1 znak na dużą literę, a pozostałe na małe. Wyświetl wszystko w nagłówku 2 stopnia w kolorze niebieskim

/*var imie = prompt("Podaj swoje imię");
var imie2 = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
document.getElementById("zad");
zad.textContent = imie2;*/

console.log(tekst.substr(1,28));
