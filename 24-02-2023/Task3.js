function fetch() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var contact = document.getElementById('contact').value;
    var gen = getGender();
    document.getElementById('displayMessage').innerHTML = "Name : "+ name +"<br> Age : "+ age + "<br> Address : " + address + "<br> Contact : " + contact + "<br> Gender : " + gen ;
    checkbox();
}
function getGender()  {
    var gender = document.getElementsByName('gender');
    for(i=0; i<gender.length; i++){
        if(gender[i].checked){
            return gender[i].value;
        }
    }
}
function checkbox(){
    var cb = document.getElementsByName('checkbox');
    var res = "";
    for(var i=0; i<cb.length; i++){
        if(cb[i].checked){
            res += cb[i].value + " <br>";
        }
    }
    document.getElementById('subs').innerHTML = "Selected Subjects are : <b> <br>" + res + "</b>";
    
}