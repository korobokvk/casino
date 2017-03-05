function resistance(rnd, persent, card) {
	var z = Math.random();
	var k = persent / 100;
	if (rnd == card) {	
	if (k > z) {
	return card;
}
	} return Math.round(Math.random() * (54 - 1) + 1);
}

//It's a magic
function cards() {
//Инициализация массива достояинства и мастей
var mast = ['♠', '♣', '♥', '♦'];
var ves = ['2','3','4','5','6','7','8','9','10','V','D','K','A'];
//Получение рандомной карты
var n = Math.round(Math.random() * (52 - 1) + 1);
//Проверка сопротивления
n = resistance(cheat(), 33, n);
//инициализация индекса массива мастей и проверка на длинну массива
var resSuitLength = Math.round(n / 13);
var resSuit = mast[resSuitLength == mast.length ? resSuitLength - 1 : resSuitLength];
var resRating = ves[n % 13];
return resRating + resSuit;
}

function getCards (n) {
var count = [];
for(var i = 0; i < n; i++) {
	count.push(cards())	
	}
return count;
} 

function cheat() {
	return 47;
}

