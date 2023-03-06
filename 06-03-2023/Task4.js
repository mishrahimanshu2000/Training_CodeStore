let principal;
let interest;
let time;


function fetch(){
    principal = document.getElementById("principal").value;
    interest = document.getElementById("interest").value;
    time = document.getElementById("time").value;
}   

function validate(p,i,t){
    try {
        if(isNaN(p) || isNaN(i) || isNaN(t)) alert("Invalid input! Principal amount, Intrest and time should be numeric");
        else if(p<0 || i<0 || t<0) alert("Invalid input! Principal, Intrest and time should be positive");
    } catch (error) {
        document.write(error);
    }
}

function simpleIntrest(){
    fetch();
    p = parseFloat(principal);
    i = parseFloat(interest);
    t = parseFloat(time);
    validate(p, i, t);
    let si = (p*i*t)/100;
    document.getElementById("output").innerHTML = `The Simple interest will be <b> ${si} <b>`;
}

function compoundIntrest(){
    fetch();
    p = parseFloat(principal);
    i = parseFloat(interest);
    t = parseFloat(time);
    validate(p, i, t);
    let ci = p*((1+(i/100))**t) - p;
    document.getElementById("output").innerHTML = `The Simple interest will be <b> ${ci} <b>`;
}