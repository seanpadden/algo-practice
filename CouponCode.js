function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let today = new Date(currentDate)
  let exp = new Date(expirationDate)
  if (enteredCode === correctCode) {
    if (today <= exp){
      return true
    }
    else {
      return false
    }
  }
  else {
    return false
  }
}

checkCoupon('123','123','September 5, 2014','September 5, 2014')