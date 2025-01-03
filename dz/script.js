import {greet} from "./name.js"; 
import {celsiusToFahrenheit} from "./celsius_farenheit.js"; 
import {calculateFallDistance} from "./distance.js";
import {calculateAverage} from "./average_value.js";
import {concatStrings} from "./words.js";

console.log(greet("Alex"))
console.log(celsiusToFahrenheit(7));
console.log(calculateFallDistance(2));
console.log(calculateAverage(4,6,56));
console.log(concatStrings("дороже второго", "съела корова"));