
let chance = 3;
let number =Number(Math.floor((Math.random()*10)+1));
let output =document.getElementById("print");
let output2 =document.getElementById("print2");
function
getnumber(){
 let getnumber=Number(document.getElementById("number").value);
 console.log(number);
 
 
   
   
chance--;
if(chance >0){
    if(number==getnumber){
       
         output.innerHTML="Correct number";
         output2.innerHTML="chances left: "+chance;
       

    }else if(number>getnumber){
        output.innerHTML="Input High number";
        output2.innerHTML="chances left: "+chance;
    }else if(number<getnumber){
        output.innerHTML="Input Low number";
        output2.innerHTML="chances left: "+chance;
      
    }
    }
    else{
        output.innerHTML="Finish your chances....";
        output2.innerHTML="Game over... ";

}
}






