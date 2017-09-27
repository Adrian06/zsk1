var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elData = document.getElementById('data');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elKomunikat = document.getElementById('komunikat');

elKomunikat.style.color = 'red';

//onload
/*window.onload = function (){
	alert('4TE');
}*/

//onblur
/*elImie.onblur = function (){
	if (elImie.value.length > 2 && elImie.value.length < 10){
		elKomunikat.textContent = '';
	}
	else{
		elKomunikat.textContent = 'Błędne dane';
	}
}*/

/*function sprawdz(){
		if (elImie.value.length > 2 && elImie.value.length < 10){
		elKomunikat.textContent = '';
	}
	else{
		elKomunikat.textContent = 'Błędne dane';
	}
}

elImie.addEventListener('blur',sprawdz);*/

function sprawdz() {
	if (this.value.length> 2 && this.value.length < 10){
		elKomunikat.textContent = '';
	}
	else{
		elKomunikat.textContent = 'Błędne dane';
		this.focus();
	}
}

function mail(){
	if (elMail1.value != elMail2.value){
		elKomunikat.textContent = 'Adresy poczty są różne';
		elMail1.disabled = false;
	/*elMail2*/	this.disabled = true;
		elMail1.focus();
		elMail1.value = '';
	/*elMail2*/ this.value = '';
	}
	else{
		elMail2.disabled = true;
		elKomunikat.textContent = '';
	}
}

function blokuj (){
	elMail2.disabled = false;
	elMail2.focus();
	this.disabled = true;
}

function haslo(){
    if (elPass1.value != elPass2.value){
        elKomunikat.textContent = 'Hasła są różne';
        elPass1.disabled = false;
        this.disabled = true;
        elPass1.focus();
        elPass1.value = '';
        this.value = '';
    }
    else{
        elPass2.disabled = true;
        elKomunikat.textContent = '';
    }
}

function blokujHaslo(){
    elPass2.disabled = false;
    elPass2.focus();
    this.disabled = true;
}

function sprawdzRegulamin() {
	if (elRegulamin.checked == true){
		elPrzycisk.disabled = false;
	}
	else{
		elPrzycisk.disabled = true;
	}
}

function odblokuj(){
	var zablokowane = document.getElementsByTagName('input');
	if (zablokowane.length > 0){
		for (var i=0; i < zablokowane.length; i++){
			if (zablokowane[i].disabled){
				zablokowane[i].disabled = false;
			}
		}
		//console.log(zablokowane);
	}
}

//odblokowanie ver.1.1

function odblokuj1(){
	var zablokowane = document.querySelectorAll('input[disabled]');
	if (zablokowane.length > 0){
		for (var i=0; i < zablokowane.length; i++){
			if (zablokowane[i].disabled){
				zablokowane[i].disabled = false;
			}
		}
		//console.log(zablokowane);
	}
}

function wyslij(){
		var puste = false;
		var input = document.querySelectorAll('input');
	for (var i = 0; i<input.length; i++){
			if (input[i].value == ''){
				puste = true;
				break;
			}
	}
	if (puste){
		elKomunikat.textContent = 'Wypełnij pola';
	}
	else{
	document.write('<div>');
	document.write('Imię: ' + elImie.value + '<br />');
	document.write('Nazwisko: ' + elNazwisko.value + '<br />');
	document.write('Login: ' + elLogin.value + '<br />');
	document.write('Mail: ' + elMail1.value + '<br />');
	document.write('Data urodzenia: ' + elData.value + '<br />');
	document.write('</div>');
	}
}

elImie.addEventListener('blur',sprawdz);
elNazwisko.addEventListener('blur',sprawdz);
elLogin.addEventListener('blur',sprawdz);
elMail2.addEventListener('blur',mail);
elMail1.addEventListener('blur',blokuj);
elPass2.addEventListener('blur',haslo);
elPass1.addEventListener('blur',blokujHaslo);
elRegulamin.addEventListener('change',sprawdzRegulamin);
//elPopraw.addEventListener('click',odblokuj);
elPopraw.addEventListener('click',odblokuj1);
elPrzycisk.addEventListener('click',wyslij);

