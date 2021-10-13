// Primitive data types

/* 
Number
String
Boolean
Undifined
Null
*/

var name = "Aida" //variable yaradildi
console.log(typeof name) //string

var age = 3
console.log(typeof age) //number

var isStudent = false
console.log(typeof isStudent) //boolean

var sample //bu qutu yaradildi amma daxili bos oldugu ucun undefined cixir [deyisken var deyeri yok]
console.log(typeof sample)

var sampleNull = null //deyisen var amma bilinmir nedi daxilinde deyer var
console.log(typeof sampleNull) //object

age = "three" //age deyisenini evvelden yaratmisdiq deye yeniden var yazmaga ehtiyac qalmir
console.log(typeof age)


// Js de kodlar yuxaridan asagi dogru oxunur 
// deyisiklik edildikden sonra evvelki ekrana cixanlarda deyismir
var number = 3
console.log(number)

number = 4
console.log(number)

number = "foor"
console.log(number)

