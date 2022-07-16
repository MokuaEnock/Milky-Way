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
document.getElementById('pd_cont1_cont').innerHTML = ('The total number of fresians is: ' + totalFresian)

//Total number of Jersey
let array2 = []
let invent2 = ['jerseyCow1', 'jerseyCow2']
for(let i = 0; i < invent2.length; i++){
    let text = document.getElementById(invent2[i])
    let text1 = text.innerHTML
    array2.push(text1)
}
let totalJersey = 0
for(var i in array2){
    totalJersey += parseInt(array2[i])
}
console.log(totalJersey)
document.getElementById('pd_cont1_cont').innerHTML = ('The total number of Jersey is: ' + totalJersey)

//total number of cows
let totalCows = parseInt(totalFresian + totalJersey)
console.log(totalCows)