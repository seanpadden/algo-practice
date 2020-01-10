function curryGreeting(a){
  function hello(b){
    console.log( 'hi ' + a + ' and ' + b)
  }
  return hello
}

chill = curryGreeting('frank')

chill('dill')