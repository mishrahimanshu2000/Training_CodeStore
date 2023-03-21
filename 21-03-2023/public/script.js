// const { MongoClient } = require('mongodb');

let tableSlots = ["Table-1", "Table-2", "Table-3", "Table-4", "Table-5", 'Table-6', 'Table-7', "Table-8"];
let timeSlots = ["11AM-12AM", "12AM-1PM", "1PM-2PM", "2PM-3PM", "3PM-4PM", '4PM-5PM', '5PM-6PM', "6PM-7PM"];

let today = new Date().toISOString().slice(0, 10);

let date = document.getElementById("date");
let tableSelector = document.querySelector("#tables");
let personName = document.querySelector('#personName');
let personCount = document.querySelector("#personCount");
let bookingDiv = document.querySelector('#selection');
let bookings = document.querySelector("#bookings");
let bookATable = document.querySelector("#bookATable");
let timeSelector = document.querySelector("#timeSlot");

// const uri = "mongodb://127.0.0.1:27017/Restaurant";
// const client = new MongoClient(uri);





date.min = today;
date.max = today.slice(0,8)+"31";
// console.log(today)

tableSlots.forEach(element => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    tableSelector.appendChild(option);
});

timeSlots.forEach(element => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    timeSelector.appendChild(option);
});

const enable = () => {
    for (let i = 1; i < tableSelector.length; i++) {
        tableSelector.options[i].removeAttribute('disabled');
        timeSelector.options[i].removeAttribute('disabled');
    }
}


let x;

// ----------------------------------------------- confirm booking
const check = async() => {
    if (!validate()) {
        return;
    }
    x = date.value.slice(0, 10);
    let newEntry = {
        userName : personName.value,
        date: date.value.slice(0, 10),
        time: timeSelector.options[timeSelector.selectedIndex].value,
        table: tableSelector.options.selectedIndex,
        persons: personCount.value,
        // delId : t.concat(tableSelector.options.selectedIndex),
    }
    url = `http://localhost:3000/book/${JSON.stringify(newEntry)}`;
    
    await fetch(url, {
        method : "POST"
    }).then( (res) => console.log("posted" + res));



    alert("Yay! Booking confirm See you there")
    tableSelector.options.selectedIndex = 0;
    timeSelector.options.selectedIndex = 0;
    change();
}

// ----------------------------------- changeTime
const changeTime = async() => {
    tableSelector.removeAttribute('disabled')
    x = date.value.slice(0, 10);
    let t = (timeSelector.options[timeSelector.options.selectedIndex].value );
    // console.log(t);
    const url = `http://localhost:3000/book/${x}/${t}`;
    enable();
    const a = await (await fetch(url)).json();
    console.log(a);
        a.forEach(element => {
            console.log(element);
            let dInd = element.table;
            tableSelector.options[dInd].setAttribute('disabled', 'disabled');
        });
    
}

// ----------------------------------------------- Onchange of date

const change = async() => {
    timeSelector.removeAttribute('disabled')
    x = date.value.slice(0, 10);
    let t = (timeSelector.options[timeSelector.options.selectedIndex].value);
    const url = `http://localhost:3000/book/${x}/${t}`;
    enable();
    const a = await (await fetch(url)).json();
        a.forEach(element => {
            let dInd = element.table;
            tableSelector.options[dInd].setAttribute('disabled', 'disabled');
        });
    
}

// -----------------------------------------------------------Booking

const book = () => {
    let name = personName.value.trim().toLowerCase();
    if (!name) {
        alert('Enter Valid Name');
        return;
    }
    bookingDiv.style.display = 'block';
    bookATable.style.display = 'none';
    let a = localStorage.getItem(name);
    if (!a) {
        localStorage.setItem(name, '[]')
    }
    console.log(localStorage.getItem(name));
}

// - ------------------------------------------------ Validation

function validate() {
    // console.log(personCount.value)
    if (!date.value || tableSelector.options.selectedIndex == 0 || timeSelector.options.selectedIndex == 0 || personCount.value > 8 || personCount.value < 1 || !personCount.value ) {
        alert("please fill the details correctly");
        return false;
    }
    return true;
}

// ---------------------------------------------------- show Bookings

const showBookings = async() => {
    bookings.innerHTML ="";
    let details = "";
    let name = personName.value.trim().toLowerCase();
    if (!name) {
        alert("Enter Your Name first")
        return;
    }
    const url = `http://localhost:3000/showDetails/${name}`;
    const res = await (await fetch(url)).json();
    console.log(res)
    // const jRes = await res.json();
    // console.log(jRes);
    if (!res) {
        alert(`Opps ${name + " "}you don't have any bookings`);
        bookATable.style.display = 'block'
        bookingDiv.style.display = 'none'
        return;
    }
    if (res.length === 0) {
        alert(`Opps ${name} you don't have any bookings`);
        bookATable.style.display = 'block'
        bookingDiv.style.display = 'none'
        return;
    }
    details += "Your Bookings are : ";
    for (let i = 0; i < res.length; i++) {
        let p = document.createElement('p');
        let btn = document.createElement('button');
        btn.id = res[i].booking_id;
        btn.setAttribute('onclick', `deleteBooking(this)`);
        // btn.onclick = deleteBooking(name, i);
        btn.innerText = 'Delete this Booking';
        details += `<br>Date: ${res[i].bookingDate.slice(0,10)} <br>Time: ${res[i].bookingTime} Table: ${res[i].tableNumber} <br>Number of Person: ${res[i].personCount} <br>`;
        // console.log(details);
        // console.log(btn);
        p.innerHTML = details;
        p.appendChild(btn);
        bookings.append(p);
        details = "";
    }
}

const deleteBooking = async(delId) => {
    // console.log(delId);
    if(!confirm("Are You Sure you want to delete this?")){return;}
    const url = `http://localhost:3000/deleteBooking/${delId.id}`
    const res = await fetch(url, {
        method : 'DELETE',
    });
    console.log(res);
    bookings.innerHTML = '';
    await showBookings();
}