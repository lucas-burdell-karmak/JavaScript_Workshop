// Welcome to the first JavaScript tutorial!

/* How do I print to the console?!?
 * The JavaScript equivalent for console printing is
 * console.log().
 */

console.log("Hello, world!");

/* declaring variables is similar to other languages
 * The important thing to know about JavaScript is that
 * it is a dynamically-typed language. Types are not
 * declared in JavaScript variables, the developer can
 * put set different types to the same variable name.
 *
 * There are 5 basic types to know in JavaScript:
 * String
 * Number
 * Array
 * Object
 * Function
 */

/* This is a String type. It behaves like strings in other languages.
 * Note that I'm using the var keyword to declare a variable here.
 */
var IAmAString = "Hello, I'm a variable!";
console.log(IAmAString);

/* This is a number type. In statically-typed languages,
 * numbers are either ints or doubles. In JavaScript,
 * they are all treated as the same type.
 */

var IAmANumber = 1;
var IAmAlsoANumber = 3.14159;
var IAmABiggerNumber = IAmANumber + IAmAlsoANumber;

console.log(IAmANumber);
console.log(IAmAlsoANumber);
console.log(IAmABiggerNumber);

/* This is an Array type. In statically-typed languages,
 * Arrays are a fixed, unchangeable length. This is not the case
 * in JavaScript. They can be indexed the same way, starting at 0!
 */

var IAmAnArray = ["Hello", "World"];

console.log(IAmAnArray[0] + ", " + IAmAnArray[1]);
/* This is also a prime example of string concatenation.
 * In JavaScript, there are a lot of ways to write this line.
 * This is the simplest to understand.
 */
