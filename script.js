	var integers = [
		"ноль",
		"один",
		"два",
		"три",
		"четыре",
		"пять",
		"шесть",
		"семь",
		"восемь",
		"девять",
		];
	var secondDozen = [
		"десять",
		"одинадцать",
		"двенадцать",
		"тринадцать",
		"четырнадцать",
		"пятнадцать",
		"шеснадцать",
		"семнадцать",
		"восемнадцать",
		"девятнадцать"
	];
	var decimalNumbers = [
		"двадцать",
		"тридцать",
		"сорок",
		"пятьдесят",
		"шестьдесят",
		"семьдесят",
		"восемьдесят",
		"девяносто"
	];
	var a = prompt('Enter number please!');
	if(parseInt(a)<=9 && parseInt(a)>=0){
		alert('Вы ввели число ' + integers[parseInt(a)]);
	}
	else if(parseInt(a)<=19 && parseInt(a)>=10) {
		alert('Вы ввели число ' + secondDozen[parseInt(a-10)]);
	}
	else if(parseInt(a)>=20 && parseInt(a)<=99) {
		alert('Вы ввели число ' + decimalNumbers[parseInt(a/10-2)] + ' ' + integers[parseInt(a%10)]);
	}
	else {
		alert('Введите корректное число!');
	}