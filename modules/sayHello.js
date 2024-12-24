import {name} from "./modules.js" //мы импортируем сюда заданную в основном файле переменную, чтобы функция на 11-12 могла понять, что за name. А потом сама функция экспортируется уже в основной файл и выполняется как saidUserName ();

export function sayHello (userName) {
	alert(`Привет, ${userName}`);
}

export function sayUserName () {
	alert("Hi, Bob");
}

export function saidUserName () {
	alert (`Привет, ${name}`)
}

export function supercalifragilisticexpialidocious (a, b) {
	let sum = a-b
	return sum
}