// Расстояние падающего объекта
let g = 9.8;
function calculateFallDistance(t) {
	let D = (1/2) * g * t**2;
	return D;
}
alert(calculateFallDistance(2));