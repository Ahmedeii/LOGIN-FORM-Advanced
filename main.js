const form = document.querySelector("form"),
  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  pField = form.querySelector(".pass"),
  pInput = pField.querySelector("input");

form.onsubmit =(e) => {
  e.preventDefault();
  (eInput.value ==="")  ? eField.classList.add("shake", "error")  : CheckEmail();

  (pInput.value ==="")  ? pField.classList.add("shake", "error") :  CheckPassword();

  eInput.onkeyup = () => {
    CheckEmail()
  }
  
  pInput.onkeyup = () => {
    CheckPassword()
  }
    
  setTimeout(() => {
    pField.classList.remove("shake") 
    eField.classList.remove("shake") 
  },500)

function CheckEmail(){
let pattern = /^\S+\S+@\S+\.+[a-z]{2,3}$/ 
if(!eInput.value.match(pattern)){
  eField.classList.add( "error") 
  let errorText = eField.querySelector(".error-text");
  (eInput.value != "") ? errorText.innerText = "Enter a valid email address" : errorText.innerText = "Email can't be blank"; 
}else{
  eField.classList.remove("error") 
}
}
function CheckPassword(){
  let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ 
  if(!pInput.value.match(pattern)){
    pField.classList.add( "error") 
  
    let errorText = pField.querySelector(".error-text");
    (pInput.value != "") ? errorText.innerText = "Minimum have eight characters,number" : errorText.innerText = "Email can't be blank"; 
  }else{
    pField.classList.remove("error") 


  }
  }



if(!eField.classList.contains("error") && !pField.classList.contains("error")){
location.href="https://youtube.com"
}

}