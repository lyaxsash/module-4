import { saidUserName, sayHello, sayUserName, supercalifragilisticexpialidocious as sus} from "./sayHello.js"; // импртируем конкретную функцию из файла. Можно поменять её название через as
import suka from "./sum.js" // можем не исопльзовать фигурные скобки и назвать как хотим, в том файле импортируется она по дефолту

sayHello("Alex");

sayUserName();

export let name = "Михаил"
saidUserName()

alert(sus(10,6));

alert(suka(10,50));

// Таким образом, у нас есть два типа экспорта.

// 1) Первый, когда мы с вами определяем название функции и экспортируем по ее названию.
// 2) Второй - когда экспорт по-умолчанию. У нас убирается название у функции и добавляется ключевое слово «default»


