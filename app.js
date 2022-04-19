
    
var name = prompt("Enter your name ");

var gender = prompt("Enter youer gender");
var age = prompt("Enter youer age");

if(age<=0){
    alert("Your age must be greater than zero")

}

var confirm  = prompt("you wants to skip the welcoming message ?");
if ( confirm == 'no'){
    
        if ( gender =="male"){
            alert(" Mr "+ "" + name   + "" +"welcome to my website ")

        }else if ( gender =="female"){
            alert(" Ms "+ "" + name + "" + "welcome to my website ")
        }else{
            alert( name +" Welcome to my website ")
        }
    }

    
   
    



