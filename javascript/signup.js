const passwordInput = document.querySelector("#password")
const usernameInput = document.querySelector("#username")
const usernameRequirementsLabel = document.querySelector("#usernameRequirements")
const inputsSubmitBtn = document.querySelector("#inputsSubmit")

function inputsCheck(){
  if(usernameInput.value.length <= 3){
    usernameRequirementsLabel.innerText="Username Too Short";
    if(){
      
    }
  }
}
inputsSubmitBtn.addEventListener("click", inputsCheck)