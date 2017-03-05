	$(document).ready( function(){ 
		$("#cardInp").keyup(function() {
         var i = $("#cardInp").val();	
 		var arr = [];
		arr = getCards(i);		
		var cardHolder;
		var carders = 'card';
		for (var j = 0; j < i; j++) {
			cardHolder = arr[j];
			if(cardHolder[1] == '♦' || cardHolder[1] == '♥') {
				var suite = 'redSuite';
			} else {
				suite = 'blackSuite'
			}

			$("body").append("<div class=" + suite + ">" + cardHolder)
			}
		});
	});	