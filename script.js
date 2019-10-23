
function generate() {

    
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers= "0123456789";
      var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

      var lowercaseInput= document.getElementById("lowercase");
      
      var uppercaseInput = document.getElementById("uppercase");
      var punctuationInput = document.getElementById("punctuation");
      var numbersInput = document.getElementById("numbers");
      var passlenght =document.getElementById("text").value;
      //var generateButton = document.getElementById(generateButton);
      
      var userpassword = "";
      var passwordCharSet = "";

      if (lowercaseInput.checked) {
        passwordCharSet += lowercase;
      }
      if (uppercaseInput.checked) {
        passwordCharSet += uppercase;
      }
      if (punctuationInput.checked) {
        passwordCharSet += punctuation;
      }
      if (numbersInput.checked) {
        passwordCharSet += numbers;
      }
      

       for (var i = 0; i < passlenght; i++) {
        userpassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));

      }
      
     document.getElementById("display").value= userpassword;
    document.getElementById("lenght").innerHTML = ("Lenght(8-128): ");
    document.getElementById("text").oninput = function(){
      if (document.getElementById("text").value >7){
document.getElementById("lenght").innerHTML = "lenght:" +document.getElementById("text").value;
 }
 else{
   document.getElementById("lenght").innerHTML="Lenght: 8";
 }
    }
    }
  function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("copy");
    alert("Password copied to the Clipboard!");

  }

