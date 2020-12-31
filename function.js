function displayModal(){
    document.getElementById("modalid01").style.display = "block";
    
}
function cancelModal(){
    document.getElementById("modalid01").style.display = "none";
}

function validateLogin(){
    const userName = document.forms['user_login']['username'].value;
    if(userName == "")
    {
        alert("Please Enter Username");
        return false
    } 

    const userPass = document.forms['user_login']['userpass'].value;
    if(userPass ===""){
        alert("Please Enter Your Password");
        return false;
    }else if(userPass.length <= 8 ){
        alert("Your Password is Less Than 8 Character");
        return false;
    }

}

function signupValidate(obj){
    const useremail = obj["useremail"].value;
    if(useremail == ""){
        alert("Please Enter User-Email");
        return false;
    }
    
    const signuup_pass = obj['signuup_pass'].value;
    if(signuup_pass === ""){
        alert("Please Enter Your Password");
        return false;
    }
    else if(signuup_pass.length <= 7){
        alert("Password Must be Greater or Equal to 8 Character!");  
        return false;
    }

    const confirmpass = obj["confirmpass"].value;
    if(confirmpass == ""){
        alert("Please Enter Confirm Password");
        return false;
    }
    if(signuup_pass != confirmpass){
        alert("Password or Confirm Password not Match!");
        return false;

    }
}