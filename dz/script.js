import ()


// имя
let myName = "Alex";
function greet() {
	alert(`Привет, ${myName}!`);
}
greet();

// Цельсий в Фаренгейт
function celsiusToFahrenheit(C) {
	let F = C*1.8+32;
	return F;
}
alert(celsiusToFahrenheit(1));

// Расстояние падающего объекта
let g = 9.8;
function calculateFallDistance(t) {
	let D = (1/2) * g * t**2;
	return D;
}
alert(calculateFallDistance(2));

// Среднее значение
function calculateAverage(a, b, c) {
	return (a+b+c)/3;
}
alert(calculateAverage(4,6,5));

// Два слова
function concatStrings(word1, word2) {
	alert(`Первое слово - «${word1}», Второе слово - «${word2}»`)
}
concatStrings("дороже второго", "съела корова");