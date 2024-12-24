// логгирование - вывод инфы в консоль (в devtools>console)
console.log("Привет!");

let user = "Bob";
console.log(user);

console.warn("Предупреждение")
console.error("Error!!! ARRRGHH")

function sum (a, b) { 
	let result = a+b;
	return result;
}
let res = sum (10, 5)
console.log("Переменная res", res);

// debugging - приостановка программы в каком-то месте, чтобы отследить какую-то её работу. Это делаем в devtools>sources.

function divide (a,b,c) {
	let div = a+b-c;
	debugger;
	return div;
}

let fin = divide (5,5,3);
alert(fin);