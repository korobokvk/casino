	$(document).ready(function() {
	    $("#draw").click(function() {
	        var count = 0;
	        var i = $("#cardInp").val();
	        var arr = getCards(i, null);
	        getCards(null, count++);
	        var cardHolder;
	        var mast = ['♠', '♣', '♥', '♦'];
	        var ves = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'V', 'D', 'K', 'A'];
	        var cheaters = [];
	        for (var j = 0; j < i; j++) {
	            count++
	            var resSuitLength = Math.round(arr[j] / 13);
	            var resSuit = mast[resSuitLength == mast.length ? resSuitLength - 1 : resSuitLength];
	            var resRating = ves[arr[j] % 13];
	            cardHolder = resRating + resSuit;
	            if (cardHolder[1] == '♦' || cardHolder[1] == '♥') {
	                var suite = 'redSuite';
	            } else {
	                suite = 'blackSuite';
	            }
	            $("body").append("<div class=" + suite + ' ' + "cardValue=" + arr[j] + ">" + cardHolder);
	            // console.log(arr[j]);
	            // $("div").attr("cardValue", arr[j]);
	            cheaters.push(arr[j]);

	        }
	        cheat(cheaters)
	    });
	});