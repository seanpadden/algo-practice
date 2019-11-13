function validParentheses(parens){
  let arr = parens.split('')
  if (arr.length % 2 === 0 && arr[0] === "(" && arr.slice(-1)[0] === ")"){
      console.log( true)
    } else {
      console.log( false)
    }
  }
validParentheses("(())((()())())")