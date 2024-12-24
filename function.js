// объявление функции
// function sayHello () { 	// в фигурных скобках шаги в функции
//   alert("Привет!");
// }

// выполнение функции
// sayHello ();
// sayHello ();

// универсальность: чтобы функция сама подставляла имя

// function sayHello1 (name) { // name - это параметр, который соотносится с именами ниже
// 	alert(`Привет, ${name}!`);
// }
// sayHello1 ("Евгений")
// sayHello1 ("Марина")

// function sayHello2 (name1, wish = "Всего доброго!") {// чтобы не было "Привет, Марина! Undefined" используем значение wish по умолчанию
// 	alert(`Привет, ${name1}! ${wish}`);
// }
// sayHello2 ("Евгений", "Хорошего дня!");
// sayHello2 ("Марина");
// sayHello2 ("Игорь");

// function sum (a, b) { // sum - название (может быть любое). Дальше задаём переменную result, которая будет равна сумме а и б. Выводим на экран эту переменную. Функция объявлена, но не выполнена. Ниже выполняем:
// 	let result = a+b;
// 	alert (result);
// }

// // Выполнение функции: добавляем в неё значения, как и в случае с Евгениями и Маринами
// sum (10, 5)


// result видима только внутри этой функции. Вне её она не сработает, если вне функции написать alert (result) - браузер выдаст ошибку. Чтобы этого избежать делаем возвращение - то есть делаем так, что sum = result. Теперь уже мы sum будем указывать вне функции, и он естественно будет отражаться, т.к. он и есть функция. Что происходит тут: задаём функцию сум, в неё помещаем два значиня. Дальше она с ними работает, то есть вводится переменная, которая их складывает. Потом она его "возвращает" - то есть делает так, что sum теперь равен result. "Возвращение" - "результат выполнения операции" Дальше мы выполняем функцию с помощью alert. 
// function sum (a, b) { 
// 	let result = a+b;
// 	return result;
// }

// alert(sum(5, 6))
// alert(sum(100,200))

// либо присваеваем этой сумме новую переменную res и вызываем её (по сути - ту же sum)
// let res = sum (10, 5)
// alert (res)

function divide (c, b) {
	let divi = c-b;
	return divi;
}
alert(divide(6,5)*100)

// так тоже можно и так как будто пизже
function sum (a, b) {
	return a+b;
}
alert(sum(5,6));

// если нужно "вернуть" 0 - писать в return нужно null 

// функция возвращает один результат, хотя внутри функции может быть несколько действий
// function riot (c, b) {
// 	let divi = c-b;
// 	let data= c*b;
// 	let pussy=5;
// 	return pussy;
// }
// alert(riot(6,5)*101)

