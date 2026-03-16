let moneyData=[]
let labels=[]
let chart

function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

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

saveData()

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

document.getElementById("futureMoney").innerText="Future money: $"+future.toFixed(2)

}

function addProduct(){

let name=document.getElementById("product").value
let sales=parseInt(document.getElementById("sales").value)
let ads=parseInt(document.getElementById("ads").value)

if(!name||isNaN(sales)||isNaN(ads)) return

let score=(sales*2)+(ads*0.5)

let li=document.createElement("li")

li.innerText=name+" | score:"+score

document.getElementById("products").appendChild(li)

}

function saveData(){

localStorage.setItem("moneyData",JSON.stringify(moneyData))

}
