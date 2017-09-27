//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = 'niebieski';

//Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h1');
if (elNaglowek.length > 0){
	console.log(elNaglowek);
	elNaglowek[0].className = 'czerwony';
}

//Metoda getElementsByClassName()

var czerwony = document.getElementsByClassName('czerwony');
if(czerwony.length > 0){
	console.log(czerwony.length);
	console.log(czerwony);

	//metoda wolniejsza
	/*var ostatni = czerwony.item(czerwony.length - 1)*/

	//metoda szybsza
/*	var ostatni = czerwony[czerwony.length-1];*/
/*	ostatni.className = 'niebieski';*/
}

//Metoda querySelector()

//zwraca pierwsze dopasowanie

var elTv = document.querySelector('li.grey');
elTv.className = 'niebieski';

//Metoda querySelectorAll()

var elTvAll = document.querySelectorAll('li.grey');
console.log(elTvAll.length);
elTvAll[2].className = 'niebieski';

//Metoda getElementsByName()

/*var elPrzycisk = document.getElementById('Przycisk');

//Ja zrobiłem sam

elPrzycisk.onclick = function() {
	var elAll = document.getElementsByName('TV');
	for ( var i=0; i<elAll.length; i++){
		elAll[i].className = 'niebieski';
	}
}*/

//To samo w pętli forEach

var elPrzycisk = document.getElementById('Przycisk');
var elTvZmien = document.getElementsByName('TV');

function zmien(element,index){
	elTvZmien[index].className = 'niebieski';
}
elPrzycisk.onclick = function (){
	elTvZmien.forEach(zmien);
}

/*elLiczbyWynik = document.getElementById('liczbyWynik');

for (var i=1;i<=100;i++){

if(i % 3 == 0){
	document.write('Fizz' + '<br />');
}
else if(i % 5 == 0){
	document.write('Buzz' + '<br />');
}
if (i % 15 == 0){
	document.write('FizzBuzz' + '<br />');
}
else{
	document.write(i + '<br />')
}
}*/

//previousElementSibling, nextElementSibling

var poczatekElement = document.getElementById('s2');
var poprzedniElement = poczatekElement.previousElementSibling;
var nastepnyElement = poczatekElement.nextElementSibling;

poczatekElement.className = 'niebieski'
poprzedniElement.className = 'niebieski'
nastepnyElement.className = 'niebieski'

//firstChild, lastChild

var lista = document.getElementsByTagName('ul')[1];
console.log(lista);

var pierwszy = lista.firstElementChild;
var ostatni = lista.lastElementChild;

pierwszy.setAttribute('class','grey');
ostatni.setAttribute('class','grey');

//******************************************

//Zmień pierwszy element input na button i przypisz wartość wyślij

var pierwszyInput = document.querySelector('input');
pierwszyInput.setAttribute('type','button');
pierwszyInput.setAttribute('value','Wyślij');

//tekst WWW łącze ze stroną ZSK

var link = document.getElementById('link');
link.setAttribute('href','http://www.zsk.poznan.pl');
