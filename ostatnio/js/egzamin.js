//******Arkusz E.14-01-15.01*********

var elPierwszy = document.getElementById('pierwszy');
 var elDruga = document.getElementById('druga');

var elDodawanie = document.getElementById('dodawanie');
var elOdejmowanie= document.getElementById('odejmowanie');
var elMnozenie = document.getElementById('mnozenie');
var elDzielenie = document.getElementById('dzielenie');

var elWynik = document.getElementById('wynik');

elDodawanie.onclick = function(){
	if(elPierwszy.value == '' || elDruga.value == ''){
		elWynik.textContent = "Proszę uzupełnić obie liczby";
	}
	else{
		var wynik = parseFloat(elPierwszy.value) + parseFloat(elDruga.value);
		elWynik.textContent ='Suma wynosi: ' + wynik;
	}
}

elOdejmowanie.onclick = function(){
	if(elPierwszy.value == '' || elDruga.value == ''){
		elWynik.textContent = "Proszę uzupełnić obie liczby";
	}
	else{
		var wynik = parseFloat(elPierwszy.value) - parseFloat(elDruga.value);
		elWynik.textContent ='Różnica wynosi: ' + wynik;
	}
}

elDzielenie.onclick = function(){
	if(elPierwszy.value == '' || elDruga.value == ''){
		elWynik.textContent = "Proszę uzupełnić obie liczby";
	}
	else if(elDruga.value == 0){
		elWynik.textContent = 'Nie wolno dzielić przez 0';
	}
	else{
		var wynik = parseFloat(elPierwszy.value) / parseFloat(elDruga.value);
		elWynik.textContent ='Iloraz wynosi: ' + wynik;
	}
}
