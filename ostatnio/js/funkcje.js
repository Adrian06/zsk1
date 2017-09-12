function witaj(imie){
    document.write("Witaj " + imie);
}
function poleProstokata(a,b){
    document.write("Pole prostokąta = " + wynik);
}
//var a = prompt("Podaj 1 bok");
//var b = prompt("Podaj 2 bok");
//var wynik = a*b;
//var name = "Janusz";
//witaj(name);
//poleProstokata(a,b);

function poleObjetosc(szerokosc, dlugosc, wysokosc){
	var pole = szerokosc * dlugosc;
	var objetosc = pole * wysokosc;
	var wynik = [pole , objetosc];
	return wynik;
}
var a = prompt("Podaj szerokość");
var b = prompt("Podaj długość");
var c = prompt("Podaj wysokość");
var x = prompt("Podaj x: 0-pole, 1-objętość")
var poleProstokata = poleObjetosc(a,b,c)[x];
console.log(poleProstokata);

//Napisać program, który oblicza obwód, pole koła oraz objętość stożka. Dane użytkownik podaje z klawiatury. Wykorzystaj obiekt Math.Użytkownik wybiera w radio co chce obliczyć.

function obliczenia
