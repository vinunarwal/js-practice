function validateForm(){
    solveErrors();

    var name = document.Form1.name.value;
    if (name.length == 0){
        seterror("name", "*This field can't be empty !!");
        return false;
    }
    else if (!isNaN(name)){
        seterror("name","*Enter a valid Name !!");
        return false;
    }
    else if (name.length<3){
        seterror("name", "*Enter a valid Name !!");
        return false;
    }

    var email = document.Form1.mail.value;
    var atPosition=email.indexOf("@");  
    var dotPosition=email.lastIndexOf("."); 

     if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=email.length){  
        seterror("email","*Enter a valid email address !!") 
        return false;  
    }  
    else if (email.length>20){
        seterror("email", "*Email length is too long !!");
        return false;
    }

    var phone = document.Form1.numb.value;
    if (isNaN(phone)){
        seterror("num","*Mobile no. can't contain alphabets !!");
        return false;
    }

    else if (phone.length>12 || phone.length<10){
        seterror("num", "*Phone number should be of 10 digits !!");
        return false;
    }

    var password1 = document.Form1.pass1.value;
    if (password1.length < 6){
        seterror("pass1", "*Password should be atleast 6 characters long!");
        return false;
    }

    var password2 = document.Form1.pass2.value;
    if (password2 != password1){
        seterror("pass2", "*Password and Confirm password should be same");
        return false;
    }

    return true;
}

function solveErrors(){
    errors = document.getElementsByClassName('err');
    for(let x of errors)
    {
        x.innerHTML = "";
    }
}

function seterror(id, error){
    set = document.getElementById(id);
    set.getElementsByClassName('err')[0].innerHTML = error;
}

