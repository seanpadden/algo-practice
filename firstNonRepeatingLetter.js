function firstNonRepeatingLetter (str) {
  let obj = {}
  for (let i = 0; i < str.length; i++){
    obj[str[i].toLowerCase()] = obj[str[i].toLowerCase()] + 1 || 1
  }
  console.log(obj)
  console.log(str)
  for (let key in obj) {
    if (obj[key] === 1){
      console.log(str.toLowerCase().indexOf(key))
      return str[str.toLowerCase().indexOf(key)]

    }
  }
  return ""
}

firstNonRepeatingLetter("moonMen")


// function firstNonRepeatingLetter (str) {
//   let obj = {}
//   for (let i = 0; i < str.length; i++){
//     obj[str[i].toLowerCase()] = obj[str[i].toLowerCase()] + 1 || 1
//   }
//   for (let key in obj) {
//     if (obj[key] === 1){
//       return str[str.toLowerCase().indexOf(key)]
//     }
//   }
//   return ""
// }