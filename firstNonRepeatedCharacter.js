/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
function first(string){
  debugger
  for(var i=0;i<string.length;i++){
      for(var j=0;j<string.length;j++){
          if(string[i]!==string[j]){
              return string[j]
          }
      }
     
  }

  
