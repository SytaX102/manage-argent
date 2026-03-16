let chart
let moneyData=[]
let labels=[]

function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user==="admin" && pass==="1234"){

localStorage.setItem("login","true")

window.location="dashboard.html"

}
else{

document.getElementById("error").innerText="Invalid login"

}

}

function logout(){

localStorage.removeItem("login")

window.location="index.html"

}

function addMoney(){

let invest=parseFloat(document.getElementById("invest").value)
let profit=parseFloat(document.getElementById("profit").value)

if(isNaN(invest)||isNaN(profit)) return

let total=invest+profit

moneyData.push(total)

labels.push("Entry "+moneyData.length)

updateChart()

}

function updateChart(){

let ctx=document.getElementById("moneyChart")

if(!ctx) return

if(chart) chart.destroy()

chart=new Chart(ctx,{

type:"line",

data:{
labels:labels,
datasets:[
{
label:"Money growth",
data:moneyData,
borderWidth:3
}
]
},

options:{
responsive:true
}

})

}

function predict(){

let months=parseInt(document.getElementById("months").value)

let base=100
let growth=1.25

let future=base*Math.pow(growth,months)

document.getElementById("futureMoney").innerText=
"Predicted money: $"+future.toFixed(2)

}

function addProduct(){

let name=document.getElementById("productName").value
let sales=document.getElementById("productSales").value

if(!name || !sales) return

let li=document.createElement("li")

li.innerText=name+" - "+sales+" sales"

document.getElementById("productList").appendChild(li)

}
