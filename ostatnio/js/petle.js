//***********FOR*********

/*for(var i=0;i<=10;i++){
	document.write(i);
	if(i==5){
		break;
	}
}*/

//losuj 100 liczb z przedziału <50;200>

/*for(var i=1;i<=100;i++){
	document.write(Math.floor(Math.random() * 151 + 50));
}*/

/*for( var i=1;i<=10;i++){
	if(i==10){
		document.write(i + ".");
	}
	else{
		document.write(i + ",");
	}
}*/

//**********WHILE*******
/*
var i = 0;
while(i++ <5){
	document.write(i + "<br>");

}*/

//Użytkownik podaje z klawiatury wartość i pętla będzie się tak długo wykonywać dopóki x>=y


/*var x =0;
var y = 0;
 while(x>=y){
	 var x = prompt("Podaj wartość x");
	 var y = prompt("Podaj wartość y");
 }*/

//**********DO - WHILE******
/*var wiek;

do{
	wiek = prompt("Podaj wiek");
	if(wiek == 19){
		document.write("Możesz już pić piwo");
	}
}
while(wiek != 19)*/

//Wykorzystaj pętlę for i do while. Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl w konsoli.

/*var tab =[];
for(var i=0;i<5;i++){
do{
	var liczba = prompt("Podaj liczbę");
}
while(liczba % 2 !=0)
	tab[i] = liczba;
	}
console.log(tab);*/

//Użytkownik podaje z klawiatury liczbę. Zabezpiecz przed podaniekm litery, znaku specjalnego

/*document.write('<input type="text" id="liczba">');
document.write('<button id="przycisk">Wyślij</button>');

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');

elPrzycisk.onclick = function(){
	if(!isNaN(elLiczba.value)){
		console.log(elLiczba.value);
	}
}*/

//**********FOR EACH*********

/*var tab = ['Anna' , 'Jacek' , 'Janusz' , 'Adrian'];
for ( var i=0;i < tab.length; i++){
	document.write(tab[i] + ' ');
}


function p(a,b){
	document.write(a+b+'<br>');
}
tab.forEach(p);

function pokaz(wartosc,index){
	document.write(index+1+' - element tablicy wynosi: ');
	document.write(wartosc + '<br>');
}
tab.forEach(pokaz);*/
//zad.dom
//Użytkownik podaje z klawiatury login i hasło(formularz), jeśli login to Filip, a hasło to Okoń@1234 to na ekranie wyświetli w kolorze czerwonym poprawne hasło. Jeśli hasło będzie błędne to w kolorze zielonym wyświetli się błędne hasło. Użytkownik ma 3 próby.

var elLogin = document.getElementById('login');
var elHaslo = document.getElementById('haslo');
var elPrzycisk = document.getElementById('przycisk');

elPrzycisk.onclick = function() {
    if(elLogin.value == 'Filip' && elHaslo.value == 'Okoń@1234'){
        document.getElementById('wynik').style.color = 'red';
        document.getElementById('wynik').textContent = elHaslo.value;
    }
    else if(elLogin.value != 'Filip'){
        document.getElementById('wynik').textContent = 'Podałeś niepoprawny login';
    }
    else if(elHaslo.value != 'Okoń@1234'){
         document.getElementById('wynik').style.color = 'green';
        document.getElementById('wynik').textContent = 'Niepoprawne hasło: ' + elHaslo.value;
    }
}
