function fetch() {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var age = document.getElementById('age').value;
    var gen = getGender();
    console.log();
    document.getElementById('displayMessage').innerHTML = "First name : " + fName +"<br> Last Name : " + lName+ "<br> Age : " + age + "<br> Gender : " + gen ;
}
function getGender()  {
    var gender = document.getElementsByName('gender')
    for(i=0; i<gender.length; i++){
        if(gender[i].checked){
            return gender[i].value;
        }
    }
}
