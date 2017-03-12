function resistance(rnd, persent, card) {
	var z = Math.random();
	var k = persent / 100;
	for(var i = 0; i < rnd.length; i++) {
        if (rnd[i] == card) {
            if (k > z) {
                return card;
            }
		}
	} return Math.round(Math.random() * (54 - 1) + 1);
}

function getCards (n, z) {
	var count = [];
	for(var i = 0; i < n; i++) {
		count.push(cards())
		}
	return count;
}

//It's a magic
function cards() {
	//Получение рандомной карты
    var n = Math.round(Math.random() * (52 - 1) + 1);
	//Проверка сопротивления
    n = resistance(cheat(), 10, n);
    return n;
}
