const fullName = document.querySelector("#fullName");
const fatherName = document.querySelector("#fatherName");
const standard = document.querySelector("#standard");
const marks = document.querySelector("#marks");
const showResultDiv = document.querySelector('#showResultDiv');
const addResultDiv = document.querySelector('#addResultDiv');


const showResults = async()=>{
    let url = "http://localhost:3000/showresult";
    showResultDiv.innerHTML = '';
    const res = await (await fetch(url)).json()
        .then((result)=>{
            for(let i=0; i<result.length; i++){
                showResultDiv.innerHTML += `<br><br> Name: ${result[i].Student_Name} <br> Father Name : ${result[i].Father_Name} <br> Standard : ${result[i].Standard} <br> Marks Obtain : ${result[i].Marks_Obtain} out of 500 <br> <img src= "./uploads/${result[i].photo}" alt="${result[i].Student_Name}" style="width:100px; height:100px">`;

                showResultDiv.innerHTML += `<br><button id="${result[i].ID}" onclick = 'deleteResult(${result[i].ID})'> Delete Record </button>`
            }

        })
        .catch((err) => console.error(err));
}

const deleteResult = async(id) => {
    let url = `http://localhost:3000/deleteresult/${id}`;
    const res = await fetch(url, {
        method : "DELETE"
    });
    showResults()
}

function addResult() {
    addResultDiv.style.display = 'block'
}