let tableSlots = ["Table-1", "Table-2", "Table-3", "Table-4", "Table-5", 'Table-6', 'Table-7', "Table-8"];
let timeSlots = ["11AM-12AM", "12AM-1PM", "1PM-2PM", "2PM-3PM", "3PM-4PM", '4PM-5PM', '5PM-6PM', "6PM-7PM"];

let today = new Date().toISOString().slice(0, 10);

let date = document.getElementById("date");
let time = document.getElementById("time");
let tableSelector = document.querySelector("#tables");
let personName = document.querySelector('#personName');
let personCount = document.querySelector("#personCount");
let bookingDiv = document.querySelector('#selection');
let bookings = document.querySelector("#bookings");
let bookATable = document.querySelector("#bookATable");
let timeSelector = document.querySelector("#timeSlot");

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


// localStorage.clear();
let x;

// ----------------------------------------------- confirm booking
const check = () => {
    if (!validate()) {
        return;
    }
    x = date.value.slice(0, 10);
    // console.log(localStorage.getItem(x))
    let t = x.concat(timeSelector.options.selectedIndex);
    let ind = tableSelector.options.selectedIndex;
    if (!localStorage.getItem(t)) {
        localStorage.setItem(t, '[]')
    }
    let a = JSON.parse(localStorage.getItem(t));
    // console.log(tableSelector.options.selectedIndex)
    a.push(ind);
    localStorage.setItem(t, JSON.stringify(a));

    let newEntry = {
        date: date.value.slice(0, 10),
        time: timeSelector.options[timeSelector.selectedIndex].value,
        table: tableSelector.options.selectedIndex,
        persons: personCount.value,
        id : t
    }

    let name = personName.value.trim().toLowerCase();
    let user = localStorage.getItem(name);
    if(!user){
        localStorage.setItem(name,'[]')
    }
    let b = JSON.parse(localStorage.getItem(name));
    b.push(newEntry);
    localStorage.setItem(name, JSON.stringify(b));
    alert("Yay! Booking confirm See you there")

    tableSelector.options.selectedIndex = 0;
    timeSelector.options.selectedIndex = 0;
    change();
}

// ----------------------------------- changeTime
const changeTime = () => {
    tableSelector.removeAttribute('disabled')
    x = date.value.slice(0, 10);
    let t = x.concat(timeSelector.options.selectedIndex);
    console.log(t);
    enable();
    let a = localStorage.getItem(t);
    if (!(a == null)) {
        let p = JSON.parse(a);
        for (let i = 0; i < p.length; i++) {
            tableSelector.options[p[i]].setAttribute('disabled', 'disabled');
        }
    }
}

// ----------------------------------------------- Onchange of date and time

const change = () => {
    timeSelector.removeAttribute('disabled')
    x = date.value.slice(0, 10);
    enable();
    let t = x.concat(timeSelector.options.selectedIndex);
    let a = localStorage.getItem(t);
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
    console.log(personCount.value)
    if (!date.value || tableSelector.options.selectedIndex == 0 || timeSelector.options.selectedIndex == 0 || personCount > 8 || personCount < 1 || !personCount.value ) {
        alert("please fill the details correctly");
        return false;
    }
    return true;
}

// ---------------------------------------------------- show Bookings

const showBookings = () => {
    bookings.innerHTML ="";
    let details = "";
    let name = personName.value.trim().toLowerCase();
    if (!name) {
        alert("Enter Your Name first")
        return;
    }
    let d = localStorage.getItem(name);
    if (!d) {
        alert(`Opps ${name + " "}you don't have any bookings`);
        return;
    }
    let q = JSON.parse(d);
    if (q.length === 0) {
        alert(`Opps ${name} you don't have any bookings`);
        return;
    }
    details += "Your Bookings are : ";
    for (let i = 0; i < q.length; i++) {
        let p = document.createElement('p');
        let btn = document.createElement('button');
        btn.id = name;
        btn.setAttribute('onclick', `deleteBooking(this, ${i})`);
        // btn.onclick = deleteBooking(name, i);
        btn.innerText = 'Delete this Booking';
        details += `<br>Date: ${q[i].date} <br>Time: ${q[i].time} Table: ${q[i].table} <br>Number of Person: ${q[i].persons} <br>`;
        // console.log(btn);
        p.innerHTML = details;
        p.appendChild(btn);
        bookings.append(p);
        details = "";
    }
}
console

const deleteBooking = (name, i) => {
    // let name = button.value;
    // console.log(button.value);
    console.log(name)
    console.log(name.id.toString())
    console.log(localStorage.getItem(name.id.toString()))
    let z = JSON.parse(localStorage.getItem(name.id.toString()));
    // console.log(z);
    let selInd = z[i].table;
    let x = z[i].id;
    // x.concat(z[i].time.slice(0,2));
    // console.log(x)
    let a = JSON.parse(localStorage.getItem(x));
    // console.log(a);
    // console.log(tableSelector.options.selectedIndex)
    for(let i=0; i<a.length; i++){
        if(a[i]===selInd){
            a.splice(i,1);
            break;
        }
    }
    localStorage.setItem(x, JSON.stringify(a));
    change()
    // console.log(z);
    z.splice(i, 1);
    localStorage.setItem(name.id.toString(), JSON.stringify(z));
    bookings.innerHTML = '';
    showBookings();
}
const reset = () => {
    window.location.reload();
}