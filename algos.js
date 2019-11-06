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
  let abbreviation = []
  for (let i = 0; i < name.length; i++){
    if (name.charAt(i) == name.charAt(i).toUpperCase()){
      abbreviation.push(name.charAt(i))
    }   
  }
  abbreviation.splice(1, 0, '.')
  let result = abbreviation.join('')
  return result.replace(/ /g,'')
}

abbrevName("Sean Padden")