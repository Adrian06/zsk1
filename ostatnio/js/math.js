/*var pi = Math.PI;
console.log(pi);*/

/*var x = prompt("Podaj wartość");
console.log(Math.sqrt(x));*/

var a = 13.2;
var b = 28.5;
var c = 1;

var minimalna = Math.min(a,b,c);
console.log(minimalna);

var maksymalna = Math.max(a,b,c);
console.log(maksymalna);

var zaokraglenie = Math.round(b);
console.log(zaokraglenie);

//abs, round, floor

var x = -56;
var y = -13.1;
var z = 14.9;

document.write("<br>" + Math.abs(x) + "<br>");
document.write("<br>" + Math.abs(y) + "<br>");
document.write("<br>" + Math.abs(z) + "<br>");

document.write("<br>" + Math.round(x) + "<br>");
document.write("<br>" + Math.round(y) + "<br>");
document.write("<br>" + Math.round(z) + "<br>");

document.write("<br>" + Math.floor(x) + "<br>");
document.write("<br>" + Math.floor(y) + "<br>");
document.write("<br>" + Math.floor(z) + "<br>");

//potęgowanie

var p = Math.pow(2,10);
console.log(p);

//losowanie

var losuj = Math.random();
console.log(losuj);

var k =3.8678768954;
k = k.toFixed(2); //3.87 też jest string
document.write(k + "<br>");

var g = 3.8678768954;
g = g.toPrecision(2);//3.9 jest string
document.write(g);

//Losuj z przedziału (0;10)

var l = Math.floor(Math.random() * 11);
console.log(l);

//losuj z przedziału (90:100)

var los = Math.floor(Math.random() * 11 + 90);
console.log(los);

//**************************************

var elPi =document.getElementById('pi');
var elNic = document.getElementById('nic');
var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function(){
	if(elPi.checked){
		elWynik.textContent = Math.PI;
	}
	else if(elNic.checked){
		elWynik.textContent = "Wybrałeś radio NIC";
	}
	else{
		elWynik.textContent = 'Nic nie wybrałeś';
	}
}
