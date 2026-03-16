let chart

function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

if(u==="admin" && p==="1234"){

localStorage.setItem("login","true")

window.location="dashboard.html"

}
else{

document.getElementById("error").innerText="Wrong login"

}

}

function logout(){

localStorage.removeItem("login")

window.location="index.html"

}

function calcProfit(){

let sales=parseFloat(document.getElementById("sales").value)
let price=parseFloat(document.getElementById("price").value)
let cost=parseFloat(document.getElementById("cost").value)
let shipping=parseFloat(document.getElementById("shipping").value)
let ads=parseFloat(document.getElementById("ads").value)

let revenue=sales*price
let expenses=(sales*cost)+(sales*shipping)+ads

let profit=revenue-expenses

document.getElementById("profit").innerText="Profit: $"+profit

updateChart(profit)

}

function scoreProduct(){

let views=parseInt(document.getElementById("views").value)
let likes=parseInt(document.getElementById("likes").value)
let comments=parseInt(document.getElementById("comments").value)

let score=(likes*2)+comments+(views/1000)

document.getElementById("score").innerText="Product score: "+score

}

function updateChart(value){

let ctx=document.getElementById("chart")

if(!ctx) return

if(!chart){

chart=new Chart(ctx,{
type:"line",
data:{
labels:["1"],
datasets:[{
label:"Profit growth",
data:[value],
borderWidth:3
}]
}
})

}
else{

chart.data.datasets[0].data.push(value)
chart.data.labels.push(chart.data.labels.length+1)
chart.update()

}

}
