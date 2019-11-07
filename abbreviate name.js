// Abbreviate a two word name 
function abbrevName(name){
  name = name.split(" ")
  let a = name[0].split("")
  let b = name[1].split("")
  return a[0].toUpperCase()+"."+b[0].toUpperCase()
}

abbrevName("Sean Padden")