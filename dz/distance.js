// Расстояние падающего объекта
const g = 9.8;
export function calculateFallDistance(t) {
	let D = (1/2) * g * t**2;
	return D;
}
