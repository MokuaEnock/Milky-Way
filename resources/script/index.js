
/*============================Total production=================================*/
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
document.getElementById('fresianCows').innerHTML = (totalFresian)

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
document.getElementById('jerseyCows').innerHTML = (totalJersey)

//total number of cows
let totalCows = parseInt(totalFresian + totalJersey)
document.getElementById('allCows').innerHTML =(totalCows)

//Total number of employees
let arrayEmployees = ['tDrivers', 'tMen']
let arrayEmp = []
for(let i = 0; i < arrayEmployees.length; i++){
    let text = document.getElementById(arrayEmployees[i])
    let text1 = text.innerHTML
    arrayEmp.push(text1)
}
let totalEmployees = 0
for (var i in arrayEmp){
    totalEmployees+=parseInt(arrayEmp[i])
}
document.getElementById('employe').innerHTML = (totalEmployees)

// total equipment
let arrayEquips = ['tVehicles', 'tMilkers']
let arrayEqp = []
for(let i = 0; i < arrayEquips.length; i++){
    let text = document.getElementById(arrayEquips[i])
    let text1 = text.innerHTML
    arrayEqp.push(text1)
}
let totalEquipment = 0
for (var i in arrayEqp){
    totalEquipment+=parseInt(arrayEqp[i])
}
console.log(totalEquipment)
document.getElementById('farmMachinery').innerHTML = (totalEquipment)

/*============================Production Cost=================================*/
/* ======Service cost===== */
document.getElementById('subButton').onclick = function(){
    var serviceFee = document.getElementById('s4_service').value;
    let serviceFeeDay = (serviceFee/30)
    console.log(serviceFeeDay)
}