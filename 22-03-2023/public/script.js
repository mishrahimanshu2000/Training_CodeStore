const fullName = document.querySelector("#fullName");
const fatherName = document.querySelector("#fatherName");
const standard = document.querySelector("#standard");
const marks = document.querySelector("#marks");
const showResultDiv = document.querySelector('#showResultDiv');


const showResults = async()=>{
    let url = "http://localhost:3000/showresult";
    const res = await (await fetch(url)).json()
        .then((result)=>{
            for(let i=0; i<result.length; i++){
                showResultDiv.innerHTML += `<br> Name: ${result[i].Student_Name} <br> Father Name : ${result[i].Father_Name} <br> Standard : ${result[i].Standard} <br> Marks Obtain : ${result[i].Marks_Obtain} out of 500 <br> <img src= "./uploads/${result[i].photo}" alt="${result[i].Student_Name}" style="width:100px; height:100px">`;
            }
        })
        .catch((err) => console.error(err));
}