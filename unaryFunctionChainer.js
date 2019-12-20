// Your task is to write a higher order function for chaining together a list of unary functions. 
// In other words, it should return a function that does a left fold on the given functions.

function chained(functions) {
  return  (input) => functions.reduce((result, func) => func(result), input)
}
