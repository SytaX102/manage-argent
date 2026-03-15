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
