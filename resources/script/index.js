
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
    document.getElementById('serviceCost').innerHTML = Math.floor(serviceFeeDay)

    var medCost = document.getElementById('medicine').value;
    var medCostDay = Math.floor(medCost/30)
    document.getElementById('medicineCost').innerHTML = medCostDay

    var landRate =document.getElementById('valueLand').value;
    var landRateDay = Math.floor((landRate * 0.115)/365)
    document.getElementById('landRate').innerHTML = landRateDay

    var feeds =document.getElementById('feeds').value;
    var feedsDay = Math.floor(feeds/30)
    document.getElementById('costFeeds').innerHTML = feedsDay

    var wages =document.getElementById('employees').value;
    var wagesDay = Math.floor((wages * totalEmployees))
    document.getElementById('wages').innerHTML = wagesDay

    var other =document.getElementById('other').value;
    var otherDay = Math.floor(other)
    document.getElementById('otherCost').innerHTML = otherDay

    prodCostDay = (otherDay + wagesDay + feedsDay + landRateDay + medCostDay + serviceFeeDay)
    document.getElementById('productionCost').innerHTML = Math.floor(prodCostDay)
}

/* ============================Forecast==================================== */
/* ==============Weekly forecast================ */
document.getElementById('button5_1').onclick = function(){
    var year = prompt("Input to forecast", '2022')
    var year = prompt("Input to forecast", '2022')
    var bpMajor = document.getElementById('majorPrice').value;
    var bpMinor = document.getElementById('minorPrice').value;
    var majorMilk = document.getElementById('majorLitre').value;
    var minorMilk = document.getElementById('minorLitre').value;
    var jerseyAvrProd = document.getElementById('jerseyMilk').value;
    var fresianAvrProd = document.getElementById('fresianMilk').value;
    var fresianCows = document.getElementById('fresianCows').innerHTML;
    var jerseyCows =document.getElementById('jerseyCows').innerHTML;
    var jerseyCowsDayMilk =(parseInt(jerseyCows) * parseInt(jerseyAvrProd))
    var fresianCowDayMilk = (parseInt(fresianCows) * parseInt(fresianAvrProd))
    var cowTotalDayMilk = (jerseyCowsDayMilk + fresianCowDayMilk)
    var totalMilk = (parseInt(majorMilk) + parseInt(minorMilk))
    if(totalMilk > cowTotalDayMilk){
        alert('Milk sold cannot be greater than milk produced!')
    }
    else{
        //milk produced daily
       let milkProdWeek = cowTotalDayMilk *  7
       document.getElementById('milkProdWeek').innerHTML = milkProdWeek
        //milk sold weekly
        let milkSoldWeek = parseInt(minorMilk) + parseInt(majorMilk)
        document.getElementById('milkSoldWeek').innerHTML = milkProdWeek
        //revenue generated daily
        let revenueWeek = milkSoldWeek * parseInt(bpMajor)
        document.getElementById('revenueWeek').innerHTML = revenueWeek
    }
}

/* ==============Monthly forecast================ */
document.getElementById('button5_2').onclick = function(){
    var monthsFull = {january :31, february:28, march:31 , april:30, may:31, june:30, july:31, august:31, september:30, october:31, november:30, december:31}
    var monthsLeap = {january :31, february:29, march:31 , april:30, may:31, june:30, july:31, august:31, september:30, october:31, november:30, december:31}
    var year = prompt("Input to forecast", '2022')
    var bpMajor = document.getElementById('majorPrice').value;
    var bpMinor = document.getElementById('minorPrice').value;
    var majorMilk = document.getElementById('majorLitre').value;
    var minorMilk = document.getElementById('minorLitre').value;
    var jerseyAvrProd = document.getElementById('jerseyMilk').value;
    var fresianAvrProd = document.getElementById('fresianMilk').value;
    var fresianCows = document.getElementById('fresianCows').innerHTML;
    var jerseyCows =document.getElementById('jerseyCows').innerHTML;
    var jerseyCowsDayMilk =(parseInt(jerseyCows) * parseInt(jerseyAvrProd))
    var fresianCowDayMilk = (parseInt(fresianCows) * parseInt(fresianAvrProd))
    var cowTotalDayMilk = (jerseyCowsDayMilk + fresianCowDayMilk)
    var totalMilk = (parseInt(majorMilk) + parseInt(minorMilk))
    if(totalMilk > cowTotalDayMilk){
        alert('Milk sold cannot be greater than milk produced!')
    }
    else{
        var yearSplit = parseInt(year.split(-2))
        if (yearSplit%4 == 0){
            var totalDays = 0
            var leapYear = Object.values(monthsLeap)
            for(var i in leapYear){
                totalDays += parseInt(leapYear[i])
        }
        //milk produce per month
        let monthMilkProd = []
        let monthValues = Object.values(leapYear)
        for(i = 0; i < monthValues.length; i ++){
            let monthDay = cowTotalDayMilk * parseInt(monthValues[i])
            monthMilkProd.push(monthDay)
        }
        let keyMonth = Object.keys(monthsLeap)
        
        let monthMilkProd2 = []
        for(var i = 0; i<monthMilkProd.length; i++){
            for(var y = 0; y<keyMonth.length; y++){
                var milkMonthProd = "The total milk produced in " + keyMonth[y] + " is "+ monthMilkProd[i]  + "<br/>"
                monthMilkProd2.push(milkMonthProd)
            }
        }
        document.getElementById('monthMilkProd2').innerHTML = [...new Set(monthMilkProd2)]
        //Quantity of milk sold per month
        let monthMilkSale = []
        for(var i = 0; i<monthValues.length; i++){
            let soldDay = totalMilk * parseInt(monthValues[i])
            monthMilkSale.push(soldDay)
        }
        let soldMilk2 = []
        for(var i = 0; i < monthMilkSale.length; i++){
            for(var y = 0; y < keyMonth.length; y++){
                var milkMonthSold = "The total milk sold in " + keyMonth[y] + ' is ' + monthMilkSale[i] + "<br/>"
                soldMilk2.push(milkMonthSold)
            }
        }
        document.getElementById('milkMonthSold2').innerHTML = [...new Set(soldMilk2)]
        //Sale of milk per month
        let monthRevenue = []
        for (var i = 0; i<monthValues.length; i++){
            let revenue = totalMilk * parseInt(monthValues) * parseInt(bpMajor)
            monthRevenue.push(revenue)
        }
        let revenueMonth = []
        for(var i = 0; i < monthRevenue.length; i++){
            for(var y=0; y<keyMonth.length; y++){
                var revenueMonth1 = "The total revenue generated in " + keyMonth[y] + ' is ' + monthRevenue[i] + "<br/>"
                revenueMonth.push(revenueMonth1)
            }
        }
        document.getElementById('revenueMonth').innerHTML = [...new Set(revenueMonth)]
        

        
    }
    else{
        //milk produce per month
        let monthMilkProd = []
        let monthValues = Object.values(monthsFull)
        for(i = 0; i < monthValues.length; i ++){
            let monthDay = cowTotalDayMilk * parseInt(monthValues[i])
            monthMilkProd.push(monthDay)
        }
        let keyMonth = Object.keys(monthsFull)
        
        let monthMilkProd2 = []
        for(var i = 0; i<monthMilkProd.length; i++){
            for(var y = 0; y<keyMonth.length; y++){
                var milkMonthProd = "The total milk produced in " + keyMonth[y] + " is "+ monthMilkProd[i]  + "<br/>"
                monthMilkProd2.push(milkMonthProd)
            }
        }
        document.getElementById('monthMilkProd2').innerHTML = [...new Set(monthMilkProd2)]
        //Quantity of milk sold per month
        let monthMilkSale = []
        for(var i = 0; i<monthValues.length; i++){
            let soldDay = totalMilk * parseInt(monthValues[i])
            monthMilkSale.push(soldDay)
        }
        let soldMilk2 = []
        for(var i = 0; i < monthMilkSale.length; i++){
            for(var y = 0; y < keyMonth.length; y++){
                var milkMonthSold = "The total milk sold in " + keyMonth[y] + ' is ' + monthMilkSale[i] + "<br/>"
                soldMilk2.push(milkMonthSold)
            }
        }
        document.getElementById('milkMonthSold2').innerHTML = [...new Set(soldMilk2)]
        //Sale of milk per month
        let monthRevenue = []
        for (var i = 0; i<monthValues.length; i++){
            let revenue = totalMilk * parseInt(monthValues) * parseInt(bpMajor)
            monthRevenue.push(revenue)
        }
        let revenueMonth = []
        for(var i = 0; i < monthRevenue.length; i++){
            for(var y=0; y<keyMonth.length; y++){
                var revenueMonth1 = "The total revenue generated in " + keyMonth[y] + ' is ' + monthRevenue[i] + "<br/>"
                revenueMonth.push(revenueMonth1)
            }
        }
        document.getElementById('revenueMonth').innerHTML = [...new Set(revenueMonth)]
    }

/* ==============Yearly forecast================ */
document.getElementById('button5_3').onclick = function(){
    var monthsFull = {january :31, february:28, march:31 , april:30, may:31, june:30, july:31, august:31, september:30, october:31, november:30, december:31}
    var monthsLeap = {january :31, february:29, march:31 , april:30, may:31, june:30, july:31, august:31, september:30, october:31, november:30, december:31}
    var year = prompt("Input to forecast", '2022')
    var bpMajor = document.getElementById('majorPrice').value;
    var bpMinor = document.getElementById('minorPrice').value;
    var majorMilk = document.getElementById('majorLitre').value;
    var minorMilk = document.getElementById('minorLitre').value;
    var jerseyAvrProd = document.getElementById('jerseyMilk').value;
    var fresianAvrProd = document.getElementById('fresianMilk').value;
    var fresianCows = document.getElementById('fresianCows').innerHTML;
    var jerseyCows =document.getElementById('jerseyCows').innerHTML;
    var jerseyCowsDayMilk =(parseInt(jerseyCows) * parseInt(jerseyAvrProd))
    var fresianCowDayMilk = (parseInt(fresianCows) * parseInt(fresianAvrProd))
    var cowTotalDayMilk = (jerseyCowsDayMilk + fresianCowDayMilk)
    var totalMilk = (parseInt(majorMilk) + parseInt(minorMilk))
    if(totalMilk > cowTotalDayMilk){
        alert('Milk sold cannot be greater than milk produced!')
    }
    else{
        var yearSplit = parseInt(year.split(-2))
        if (yearSplit%4 == 0){
            var totalDays = 0
            var leapYear = Object.values(monthsLeap)
            for(var i in leapYear){
                totalDays += parseInt(leapYear[i])
            }
            let fresianMilkYear = (totalDays * parseInt(fresianAvrProd) * parseInt(fresianCows))
            let jerseyMilkYear = (totalDays * parseInt(jerseyAvrProd) * parseInt(jerseyCows))
            let milkTotalYear = fresianMilkYear + jerseyMilkYear
            //milk produced yearly
            document.getElementById('yearTotalMilk').innerHTML = milkTotalYear
            //milk bought yearly
            let minorMajorYear = (totalDays * parseInt(majorMilk)) + (totalDays * parseInt(minorMilk))
            document.getElementById('minorMajor').innerHTML = minorMajorYear
            //total revenue generated
            let revenueYear = minorMajorYear * parseInt(bpMajor)
            document.getElementById('revenueYear').innerHTML = revenueYear
        }
        else{
            var totalDays = 0
            var fullYear = Object.values(monthsFull)
            for(var i in fullYear){
                totalDays += parseInt(fullYear[i])
            }
            let fresianMilkYear = (totalDays * parseInt(fresianAvrProd) * parseInt(fresianCows))
            let jerseyMilkYear = (totalDays * parseInt(jerseyAvrProd) * parseInt(jerseyCows))
            let milkTotalYear = fresianMilkYear + jerseyMilkYear
            //milk produced yearly
            document.getElementById('yearTotalMilk').innerHTML = milkTotalYear
            //milk bought yearly
            let minorMajorYear = (totalDays * parseInt(majorMilk)) + (totalDays * parseInt(minorMilk))
            document.getElementById('minorMajor').innerHTML = minorMajorYear
            //total revenue generated
            let revenueYear = minorMajorYear * parseInt(bpMajor)
            document.getElementById('revenueYear').innerHTML = revenueYear
        }
    }
}
}
}