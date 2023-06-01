var form = document.getElementById("myform")
var username = document.getElementById("fname")
var email = document.getElementById("emailid")
var mobileno = document.getElementById("mobile")
var messages = document.getElementById("subject")



function checkInputs()
 {

    if(this.username.value.trim() == "")
    {
        // alert("Blank Username")
        this.username.style.border="solid 2px red";
        return false
    }
    else if(!isNaN(this.username.value))
    {
        alert("Invalid Name")
        this.username.style.border="solid 2px red";
        return false
    }
    else if(this.email.value.trim() == "")
    {
        // alert("Blank Email")
        this.email.style.border="solid 2px red";
        return false
    }
    else if(this.mobileno.value.trim() == "")
    {
        // alert("Blank Country")
        this.mobileno.style.border="solid 2px red";
        return false
    }
    else if(isNaN(this.mobileno.value) || this.mobileno.value.length<10)
    {
        alert("Enter Valid Mobile No")
        this.mobileno.style.border="solid 2px red";
        return false
    }
    else if(this.messages.value.trim() == "")
    {
        alert("Blank Subject")
        this.messages.style.border="solid 2px red";
        return false
    }
    else
    {
        success();
    }
    
 }
 function success()
 {
    // var regx = /^([a-z A-Z])$/
    // if(this.username.value == regx)
    // {
        this.username.style.border="solid 2px green"
        this.email.style.border="solid 2px green"
        this.mobileno.style.border="solid 2px green"
        this.messages.style.border="solid 2px green"
        return true
    // }
 }