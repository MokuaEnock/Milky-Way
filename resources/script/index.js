let fresianCow1 = document.getElementById('fresianCow1')
//console.log(fresianCow1)
fcow1 = fresianCow1.innerHTML
//console.log(fcow1)

//find the total number of fresian
let array = []
let invent = ['fresianCow1', 'fresianCow2']
for(let i = 0; i < invent.length; i++){
    let text = document.getElementById(invent[i])
   let text1 = text.innerHTML
   array.push(text1)
}
let totalFresian = 0
for(var i in array){
    totalFresian += parseInt(array[i])
}
console.log(totalFresian)

/* let array1 = [1, 3, 4];
let sum = 0;
for (var i in array1){
sum += array1[i]
}
console.log(array1) */