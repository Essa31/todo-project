
    
var name = prompt("Enter your name ");

var gender = prompt("Enter youer gender");
var age = prompt("Enter youer age");

if(age<=0){
    alert("Your age must be greater than zero")

}

var confirm  = prompt("you wants to skip the welcoming message ?");
if ( confirm == 'no'){
    
        if ( gender =="male"){
            alert(" Mr "+ name  +" welcome to my website ")

        }else if ( gender =="female"){
            alert(" Ms " + name +  " welcome to my website ")
        }else{
            alert( name +" Welcome to my website ")
        }
    }

    
   
   
/*let l1 = [1,2,3,4,5,6] 
function Maxer(lists){
    let max = 0
    for (let i=0; i < lists.length ; i++)
    {
        let item = lists[i]
        if(max<item){
            max=item
        }
    }
    return max;
}  
console.log(Maxer(l1))*//*
let l2 =[1,3,"tfdr","543",4]
function sumNumber(lists){
        let conter=0
        for (let i=0; i < lists.length ; i++){
            let item = lists[i]
            
            if("number"==typeof item){
                conter=conter + item
                
            }
        }
        return conter


}
console.log(sumNumber(l2))*/


