const bill = document.querySelector("#bill"); ///\/\/\/\/\/input/\/\/\/\/\/\\
const service = document.querySelector('#service'); //select with options
const peopNum = document.querySelector('#peopNum'); //input
const result = document.querySelector('#result'); //span result
const each = document.querySelector('#each'); //span each
const btn = document.querySelector("#calculate"); //button calculate
const tip = document.querySelector("#tip"); //p tip
const inputs = document.querySelectorAll('input');


document.querySelector("button").addEventListener("click", calculate);

function calculate () {
    let index = service.selectedIndex;

    let totalTip = Number(bill.value) * Number(service[index].value) / 100;

    result.style.visibility = "visible";
    tip.style.visibility = "visible";

    if (peopNum.value > 1) {
        result.innerHTML = (totalTip / Number(peopNum.value)).toFixed(2);
        each.style.visibility = "visible";
    } else {
        result.innerHTML = totalTip.toFixed(2);
        each.style.visibility = "visible"; 
    }

}