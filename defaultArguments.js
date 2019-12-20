function defaultArguments(func, params) {
  let stringedFunc = func.toString()
  const extractArgs = /(?:\()(.*)(?:\))/
  let args = stringedFunc.match(extractArgs)[1].split(',')
  
  const newFunc = () => {
    const oldArg = arguments
    console.log(oldArg)
    args.map((arg, index) => {
      if (index < oldArg.length){
        return func.apply(this, oldArg[index])
      } else {
        return func.apply(this, params[args[index]])
      }
    })
  }
  newFunc()
}
  



      // if (!typeof params === "undefined") {
      //   newArgs.push(params[i])
      // } else {e
      //   newArgs.push(args)
      // }
    
    // console.log(newArgs)

  function add(a,b) { return a+b; }
  var add_ = defaultArguments(add,{b:9})