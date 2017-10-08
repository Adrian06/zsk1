//Wyrażenia regularne

//var tekst = 'Zespół Szkoł Komunikacji
//var tekst = 'mąka';
//var tekst = 'mąka@';
//var tekst = 'mąkaa@';
//var tekst = 'a';
//var tekst = 'aa';
//var tekst = 'aa/';
//var tekst = 'pl';
//var tekst = '123516s';
var tekst = 'testtest';


//*var regEx = /Szkół/; //true
//var regEx = /szkół/; //false
//var regEx = /szkół/i; //true - od tego jest i(nie ważne są wielkości liter)
//var regEx = /^szkół/i; //false - ^ czy jest na początku
//var regEx = /szkół$/i; //false - $ czy jest na końcu
//var regEx = /^szkół$/i; //false
//var regEx = /^szkół$/i; //false - sprawdza czy jest taki teskt od początku do końca
//var regEx = /[a-z]/; //true sprawdza małe litery
//var regEx = /[A-Z]/; //true
//var regEx = /[A-z]/; //true
//var regEx = /[A-z]/; //true
//var regEx = /[ąęćźżółńś][a-z]/; //true
//var regEx = /^[ąęćźżółńś][a-z]/; //false kolejność nawiasów ma znaczenie
//var regEx = /[a-z]\s/; //false \s - sprawdza spacje
//var regEx = /[a-z]+@/; //true + - musi być przynajmniej jeden element po plusie
//var regEx = /[a-z]+@/; //true
//var regEx = /mąk[a]?/; //true ? - zastępuje jeden znak poprzedzający
//var regEx = /^mąk[a]?@/; //false - sprawdza czy a jest przed znakiem zapytania
//var regEx = /[a]/; //true
//var regEx = /[a]{1}/; //true  {} - sprawdza czy jest znaków tyle ile pwiszesz
//var regEx = /^[a]{1}$/; //false
//var regEx = /^[a]{2}$/; //true
//var regEx = /^[a]{2,4}$/; //true  - przedział ile ma być liter
//var regEx = /\//; // true  żeby szukało / trzeba dać \/(znak specjalny)
//var regEx = /./; // .-zastępuje jeden znak
//var regEx = /\./; // true szuka kropki
//var regEx = /\.pl/; //true
//var regEx = /\.pl/; //true
//var regEx = /[ąęćźżółńś]|[a-z]/; //true  | - OR
//var regEx = /\w/; //true w - dowolny znak
//var regEx = /\W/; // false   negacja małego w (bez polskich znaków)
//var regEx = /\d/; // true  d - sprawdza czy są cyfry
//var regEx = /\D/; // Negacja - wszystko oprócz cyfr
//var regEx = /\s/; // mogą być spacje
//var regEx = /\S/; // nie mogą być spacje
//var regEx = /test/; // true
//var regEx = /(test)/; // true
//var regEx = /(test){1}/; // true
var regEx = /(test){2}/; // false  Musi być 2 razy test napisane obok siebie
var sprawdz = regEx.test(tekst);

console.log(sprawdz);

//*****************************

//kod pocztowy

//https://regex101.com/r/JMxqvX/1

//^\d{2}-\d{3}$

//Użytkownik podaje z klawiatury kod pocztowy i nazwę miasta. Sprawdź czy kod jest prawidłowy, jeśli tak to na ekranie w bloku wyświetl kod pocztowy: (kod), miasto: (miasto).(Formularz)

//var regEx = /\w{1,}\.mp3/g;
var regEx = /\w+\.mp3/g;
var text1 = 'plik@mp3 arkusz.csv szkola.mp3 tekst.mp3';
//var sprawdz1 = regEx.test(text1);
var sprawdz1 = text1.match(regEx);
console.log(sprawdz1);
document.write(sprawdz1);
