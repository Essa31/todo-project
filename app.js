
    
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
    alert("As a user, I would like to answer more questions")
    let Answer1=prompt("Q.1 Do you like programming ? ")
    let Answer2=prompt("Q.2 Do you like learning new things?")
    let Answer3=prompt("Q.3 Do you want to get rich?")
    l1=[]
    if(Answer1==""){
        l1.push("invalid")

        
    }else{
        l1.unshift(Answer1)
    }
    if(Answer2==""){
        l1.unshift("invalid")

        
    }else{
        l1.unshift(Answer2)
    }
    if(Answer3==""){
        l1.unshift("invalid")

        
    }else{
        l1.unshift(Answer3)
    }
    for(i=0;i<l1.length;i++){
        let item =l1[i]
        console.log(item)

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


