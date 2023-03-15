let timeslots = ["Table-1", "Table-2", "Table-3", "Table-4", "Table-5", 'Table-6', 'Table-7', "Table-8"];

let today = new Date().toISOString().slice(0, 16);

let date = document.getElementById("date");
let time = document.getElementById("time");
let tableSelector = document.querySelector("#tables");
let personName = document.querySelector('#personName');
let personCount = document.querySelector("#personCount");
let bookingDiv = document.querySelector('#selection');
let bookings = document.querySelector("#bookings");
let bookATable = document.querySelector("#bookATable");


date.min = today;
// console.log(today)

timeslots.forEach(element => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    tableSelector.appendChild(option);
});
const enable = ()=>{
    for(let i=1; i<tableSelector.length; i++){
        tableSelector.options[i].removeAttribute('disabled');
    }
}

// localStorage.clear();
let x;

// ----------------------------------------------- confirm booking
const check = () => {
    if(!validate()){    
        return;
    }
    x = date.value.slice(0, 14);
    // console.log(localStorage.getItem(x))
    let ind = tableSelector.options.selectedIndex;
    if(!localStorage.getItem(x)){
        localStorage.setItem(x,'[]')
    }
    let a = JSON.parse(localStorage.getItem(x));
    // console.log(tableSelector.options.selectedIndex)
    a.push(ind);
    localStorage.setItem(x, JSON.stringify(a));

    let newEntry = {
        date : date.value.slice(0,10),
        time : date.value.slice(11,16),
        table : tableSelector.options[ind].value,
        persons : personCount.value
    }

    let name = personName.value.trim().toLowerCase();

    let b = JSON.parse( localStorage.getItem(name) );
    b.push(newEntry);
    localStorage.setItem(name, JSON.stringify(b));
    alert("Yay! Booking confirm See you there")

    tableSelector.options.selectedIndex = 0;
    change();
}

// ----------------------------------------------- Onchange of date and time

const change = () => {
    tableSelector.removeAttribute('disabled')
    x = date.value.slice(0, 14);
    enable();
    let a = localStorage.getItem(x);
    if (!(a == null)) {
        let p = JSON.parse(a);
        for (let i = 0; i < p.length; i++) {
            tableSelector.options[p[i]].setAttribute('disabled', 'disabled');
        }
    }
}

// -----------------------------------------------------------Booking

const book = () => {
    let name = personName.value.trim().toLowerCase();
    if(!name){
        alert('Enter Valid Name');
        return;
    }
    bookingDiv.style.display = 'block';
    bookATable.style.display = 'none';
    let a = localStorage.getItem(name);
    if(!a){
        localStorage.setItem(name,'[]')
    }
    console.log(localStorage.getItem(name));
}

// - ------------------------------------------------ Validation

function validate(){
    if(!date.value || tableSelector.options.selectedIndex === 0 || personCount>8 || personCount<1){
        alert("please fill the details correctly");
        return false;
    }
    return true;
}

// ---------------------------------------------------- show Bookings

const showBookings = ()=>{
    let details = "";
    let name = personName.value.trim();
    if(!name){
        alert("Enter Your Name first")
        return;
    }
    let d = localStorage.getItem(name);
    if(!d){
        alert(`Opps ${name + " "}you don't have any bookings`);
        return;
    }
    let q = JSON.parse(d);
    if(q.length === 0){
        alert(`Opps ${name} you don't have any bookings`);
        return;
    }
    details += "Your Bookings are : \n";
    for(let i=0; i<q.length; i++){
        details += `Date: ${q[i].date} \nTime: ${q[i].time} Table: ${q[i].table} \nNumber of Person: ${q[i].persons} \n`;
    }
    bookings.innerText = details;
}

const reset = ()=>{
    window.location.reload();
}

