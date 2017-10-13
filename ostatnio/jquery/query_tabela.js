$(document).ready(function(){
	/*$('tr:even').css('background','#b2aaaa');
	$('tr:odd').css('background','#f7f0f0');*/

	$('#tabela1 tr:even').css('background','#b20000');
	$('#tabela1 tr:odd').css('background','#f7f0f0');

	$('#tabela1 tr:first').css('background','#5ad45f');
	$('#tabela1 tr:last').css('background','#5ad45f');
	$('#tabela1 tr:eq(3)').css('color','blue');
	$('#tabela1 td:eq(3)').css('color','white');
	$('#tabela1 td:contains("Sól")').css('background','blue'); //rozmiar liter ma znaczenie

	$('#widoczny').click(function(){
		$('#obraz').show(4000)
	});

	$('#niewidoczny').click(function(){
		$('#obraz').hide(1000)
	});
});
