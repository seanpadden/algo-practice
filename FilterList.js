/// Practicing algos!

// Given an array of numbers and strings, print only the numbers

function filter_list(array) {
  let result = []
  array.map(element => {
    if(typeof element === "number"){
      result.push(element)
    }
  })
  console.log(result)
}
///Run it
// filter_list([1,2,3, "a", "b"])
