$(document).ready(function(){
	$('div').css('background','yellow');
	$('.tekst').css('background','teal');
	$('#id1').css('background','red');
	$('#id2').css('color','white');	$('#id1').css({'background':'brown','color':'green'});
	$('*').css('font-family','Arial','Verdana');
	$('*').css('color','pink');
	$('*').css({'color':'pink','font-size':'100%'});
	$('#btn1').click(function(){
		$('div').css('color','black');
	})
	$('#ukryjAkapit').click(function(){
		//$('#akapit').hide();
		$('#akapit').hide(2000);
	})
	$('#pokazAkapit').click(function(){
		//$('#akapit').show();
		$('#akapit').show('fast');
	})
	$('#zmienHtml').click(function(){
		$('#html').html('<h1>Zmieniony tekst</h1>');
	})
	$('a').css('color','green');
	$('#link a').css('color','black');
	$('#kolorInny').click(function(){
		$('input[type="text]').css({'background':'brown','color':'black'});
	})
})
