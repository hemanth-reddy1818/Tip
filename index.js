
var button=document.querySelector(".submit-button");
button.addEventListener("click", function(){
   
    var input_value1=document.querySelector(".subtotal_input").value;
    
    var input_value2=document.querySelector(".tip_input").value;
    if(input_value1==""){
        alert("Total cannot be empty");
    }
    else{
        if(input_value2==""){
            input_value2=0;
        }
        input_value2=(input_value2/100)*input_value1;
      
        let output=Number(input_value1)+Number(input_value2);
       
       
        // console.log(output);
       
    
        document.querySelector("h1").innerHTML="Total amount to be  paid is  "+output+ ".";
        setTimeout(() => {
            var try_again=prompt("Do you want to another numvber:(Y/N)");
            if(try_again.toLowerCase()=="Y".toLowerCase()){
                location.reload();
        
        
            }
        
            
        }, 3000);
    
    }
})