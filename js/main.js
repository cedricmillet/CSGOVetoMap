
$(document).ready(function(){
	
	var total_veto = 1;

	//attribution des images
	$('div.item').each(function( index ) {
		var bgimage = $(this).children().text();
		$(this).css('background-size', 'cover');
		$(this).css('background-image', 'url("img/maps/'+bgimage+'.jpg")');
		$(this).data('isveto', 'false');
	});


	$('div.item').click(function() {
		veto_item($(this));
		
	});


	$('div.restart').click(function() {
		restartVeto();
		
	});

	function veto_item(item)
	{
		item.css('opacity', '0.7');
		item.data('isveto', 'true');
		item.addClass("isveto");
		checkVeto();
	}


	function unveto_item(item)
	{
		item.css('opacity', '1');
		item.data('isveto', 'false');
		item.removeClass('isveto');
	}

	function checkVeto()
	{
		

		var nb_item_non_veto = 0;
		$('div.item').each(function( index ) {
			var is_veto = $(this).data('isveto');
			if(is_veto=='false')
				nb_item_non_veto++;
		});

		if(nb_item_non_veto==1)
		{
			$('div.item').each(function( index ) {
				var is_veto = $(this).data('isveto');
				var map = $(this).children().text();
				if(is_veto=='false')
				{
					$(this).css('border-color', 'red');
					modal(map);
				}
				
			});			
		}


		

		var total_veto_next = total_veto +1;
		if(total_veto_next==2)
			$('div.infostring').html('BAN');
		else if(total_veto_next==3)
			$('div.infostring').html('<p style="color:blue">PICK MAP n°2</p>');
		else if(total_veto_next==4)
			$('div.infostring').html('<p style="color:blue">PICK MAP n°3</p>');
		else if(total_veto_next==5)
			$('div.infostring').html('BAN');
		else if(total_veto_next==6)
			$('div.infostring').html('BAN');
		else if(total_veto_next==7)
			$('div.infostring').html('BAN');
		else if(total_veto_next==8)
			$('div.infostring').html('');



		total_veto++;
	}


	function restartVeto()
	{
		$('div#modal').css('display', 'none');
		$('div.item').each(function( index ) {
			unveto_item($(this));
			$(this).css('border-color', 'black');
		});
		//TEXTE BAN
		$('div.infostring').html('BAN');
		total_veto=1;
	}


	function modal(map)
	{
		var modal = $('div#modal');
		modal.css('display', 'block');
		$('div#modal-txt').html('Map selectionnée : <b>'+map+'</b>');
	}


});