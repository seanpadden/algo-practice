// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

/**
 * @param {string} address
 * @return {string}
 */

// IP = string of numbers and dots
// Return a string of dots in brackets 

var defangIPaddr = function(address) {
  const regex = /\./g
  return address.replace(regex, "[.]")
};