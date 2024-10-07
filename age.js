let date = new Date();
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let days = document.getElementById("days");
let months = document.getElementById("months");
let years = document.getElementById("years");

function age(){
    if(day.value <= 0 || day.value > 31){
        day.classList.add("rósz");
        days.innerText("0");
    }else if(month.value <= 0 || month.value > 12){
        month.classList.add("rósz");
        months.innerText("0");
    }else if(year.value > date.getFullYear()){
        year.classList.add("rósz");
        years.innerText("0");
    }else{
        month.classList.remove("rósz");
        year.classList.remove("rósz");
        day.classList.remove("rósz");
    }

    days.innerText = (Math.floor(date.getDate() - Math.floor(day.value)))
    months.innerText = (Math.floor(date.getMonth() + 1 - Math.floor(month.value)))
    years.innerText = (Math.floor(date.getFullYear() - Math.floor(year.value)))

    if(days.innerText <= 0){
        months.innerText = months.innerText - 1;
        days.innerText = Math.floor(days.innerText) + 30;
    }

    if(months.innerText <= 0){
        months.innerText = Math.floor(months.innerText) + 12;
        years.innerText = Math.floor(years.innerText) - 1;
    }
}