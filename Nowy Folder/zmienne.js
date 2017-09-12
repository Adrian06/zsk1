var imie;
var imie = "Adrian";
var nazwisko = "Kowal";
var wiek = 19;
document.write("Twoje imię to " + imie + "<br />");
document.write("Twoje nazwisko to " + nazwisko);
console.log("Wiek: " + wiek);

var x, y;
x = 10;
y = 5;
var wynik = x + y;
//alert(wynik);

x = 20;
y = 2;
var suma = x + y; //22
var roznica = x - y; //18
var dzielenie = x / y; //10
var mnozenie = x * y; //40
var modulo = x % y; //0

//alert(modulo);

var a = 10, b = "3a";
//alert(a + b); //103a
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(a + (a % 3) - 10); //1

//systemy liczbowe

var c = 10; //liczba w systemie dziesiętnym
var d = 0100; //liczba w systemie oktalnym
var e = 0x10; // liczba w systemie szesnastkowym

console.log(c); //10
console.log(d); //64
console.log(e); //16

console.trace();

var _zmienna = 1; //1
//var 1_zmienna = 1; //nie może być
//console.log(1_zmienna); //nie działa
//console.log(_Zmienna); //not defined

var f = 2.5; // można tak
console.log(f);

var prawda = true;
console.log(typeof(prawda));

var tekst = "tekst"
console.log(typeof(tekst));

var inna;
console.log(typeof(inna));

var tab = ["jeden" , "dwa"];
console.log(tab);

/*var podajg = prompt("Podaj zmienną g");
console.log(typeof(podajg));
podajg = parseInt(podajg);
console.log(typeof(podajg));
console.log(podajg); //po podaniu wartości "xd" będzie NaN*/

/*var podajLiczbeRzeczywista = prompt("Podaj l.rzeczywistą", "np. 3.5")
podajLiczbeRzeczywista = parseFloat(podajLiczbeRzeczywista); //3.5 = 3.5
console.log(podajLiczbeRzeczywista); //3,5 = 3*/

var liczba = 5;
var tekst = "a";
var przerwa = " ";
var wynik = typeof(liczba + przerwa); // będzie string
console.log(wynik);

var imie = "Karol";
var nazwisko = "Nowak";
var dane = imie + " " + nazwisko;
var blok = document.getElementById("wynik");
//blok.innerHTML = dane;
blok.textContent = dane;

var imie = prompt("Podaj swoje imię");
var block = document.getElementById("imie");
block.textContent = imie;
