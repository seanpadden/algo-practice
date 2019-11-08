function domainName(url){
  let slashes = url.indexOf("//")
  let www = url.indexOf("www.")
  let dot = url.indexOf(".")

  let regex = /.*([^\.]+)(com|net|org|info|coop|int|co\.uk|org\.uk|ac\.uk|uk|__and so on__)$/
  console.log(url.replace(regex))

}

domainName("http://github.com/carbonfive/raygun")
