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

// Abbreviate a two word name where there will always be two uppercase letters
function abbrevName(name){
  name = name.split(" ")
  let a = name[0].split("")
  let b = name[1].split("")
  return a[0].toUpperCase()+"."+b[0].toUpperCase()
}

abbrevName("Sean Padden")