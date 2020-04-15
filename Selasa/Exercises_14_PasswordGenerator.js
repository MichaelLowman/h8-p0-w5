
function changeVocals (str) {
  //code di sini
  var hvokal = 'aiueoAIUEO'
  var kamus = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var ubahvokal = ''
  var newStr = ''
  for(var i=0; i<hvokal.length; i++){
      for(var j=0; j<kamus.length; j++){
          if(hvokal[i] == kamus[j]){
              ubahvokal += kamus[j+1]
          }
      }
  }
  
  for(k=0; k<str.length; k++){
      var flag = false
      for(l=0; l<hvokal.length; l++){
          if(str[k] == hvokal[l]){
              newStr += ubahvokal[l]
              flag = true
          }
      }
    if(flag == false){
        newStr += str[k]
    }
  }
    return newStr
}

function reverseWord (str) {
  //code di sini
  var newStr = ''
   
  for(var i=str.length-1; i >= 0; i--){
        newStr += str[i]
  }
 return newStr
}

function setLowerUpperCase (str) {
  //code di sini
  var hbesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var hkecil = hbesar.toLowerCase()
  var newStr = ''

  for(var i=0; i<str.length; i++){
      for(var j=0; j<hbesar.length; j++){
          if (str[i] == hbesar[j]){
                newStr += hkecil[j]

          }

          if (str[i] == hkecil[j]){
              newStr += hbesar[j]
          }

          
      }

      if(str[i] == ' ' ){
        newStr += str[i]
    }

  }

  return newStr
}

function removeSpaces (str) {
  //code di sini
  var newStr = ''

  for(var i = 0; i<str.length; i++){
      if(str[i] != ' '){
          newStr += str[i]
      }
  }
 return newStr
}

function passwordGenerator (name) {
  //code di sini

  var change = changeVocals(name)
  var balik = reverseWord (change)
  var ubahBK =  setLowerUpperCase(balik)
  var hapusSpasi = removeSpaces(ubahBK)
  
  
if(hapusSpasi.length > 5){
    return hapusSpasi
}else{
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
}
  
  
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'