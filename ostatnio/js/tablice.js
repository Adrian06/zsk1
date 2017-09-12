// tworzenie tablicy za pomocą literału tablicy
var kolory = ['biały' , 'zielony' , 'czerwony'];
var elKolor = document.getElementById("kolor");
elKolor.textContent = kolory[0];

//tworzenie tablicy za pomocą konstruktora tablicy Array
var lalki = new Array("BMW" , "Audi" , "Ferrari" , "Fiat");
console.log(lalki[0]);
console.log(lalki[lalki.length - 1]);
console.log("Ilość elementów w tablicy: " + lalki.length);

//var nowy = prompt("Podaj fajne auto");
//lalki.splice(0,1,nowy);
//document.write(lalki[0]);

//tablice wielowymiarowe
var tab = new Array(
    new Array("Jan" , "Kowal" , "Poznań"),
    new Array("Anna" , "Nowak" , "Gniezno"),
    new Array("Anna" , "Kowal" , "Poznań")
);
console.log(tab[1][2]);

var imiona = ["Janusz" , "Adrian" , "Andrzej" , "Zenon"];
console.log(imiona);
var posortowaneImiona = imiona.sort();
console.log(posortowaneImiona);

var odwrocImiona = imiona.reverse();
odwrocImiona.pop();

//dodanie elementu na początku tablicy
odwrocImiona.unshift("Paweł");
odwrocImiona.push("Krystiana");
console.log(odwrocImiona);

//sprawdzenie czy istnieje element w tablicy
console.log(odwrocImiona.indexOf("Józek"));
console.log(odwrocImiona.indexOf("Paweł"));

//tablica z liczbami
var cyfry = [1, 2, 20, 190, -1, 1000000];
console.log(cyfry);
var posortowaneCyfry = cyfry.sort();
console.log(posortowaneCyfry);

var sortujCyfryPrawidłowo = cyfry.sort(function(a,b){
    return(a-b);
})
console.log(sortujCyfryPrawidłowo);

//zad. dom
//Utwórz formularz z loginem(text) i hasłem(password). Zapisz dane w tablicy. Zapisz wynik w nagłówku drugiego stopnia. Użytkownik podaje również kolor w jakim ma być wszystko wyświetlone.

