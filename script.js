function calculate() {

let invest = document.getElementById("invest").value;
let profit = document.getElementById("profit").value / 100;
let months = document.getElementById("months").value;

let money = invest;

for (let i = 0; i < months; i++) {
    money = money + (money * profit);
}

document.getElementById("result").innerText = "$" + money.toFixed(2);

}
let chart;

function calculate(){

let invest = parseFloat(document.getElementById("invest").value);
let profit = parseFloat(document.getElementById("profit").value)/100;
let months = parseInt(document.getElementById("months").value);

let money = invest;

let data = [];
let labels = [];

for(let i=1;i<=months;i++){

money = money + money*profit;

data.push(money.toFixed(2));
labels.push("Month "+i);

}

document.getElementById("result").innerText="Future: $"+money.toFixed(2);

createChart(labels,data)

}

function createChart(labels,data){

if(chart){
chart.destroy();
}

const ctx=document.getElementById("moneyChart");

chart=new Chart(ctx,{
type:"line",
data:{
labels:labels,
datasets:[{
label:"Money Growth",
data:data,
borderWidth:3
}]
},
options:{
responsive:true
}
});

}
