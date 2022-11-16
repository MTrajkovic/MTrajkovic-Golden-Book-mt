function User(email, password) {
    this.email = email;
    this.password = password;
  }

  document.getElementById("applyCourseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isFormValid = true;
    const isPasswordValid=regexPassword.test(this.password.value);
    const email = document.getElementById("email"); 
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const isEmailValid = regexEmail.test(email.value);
    toggleErrorMessage(!isEmailValid, email);

    if (isPasswordValid==false){
      isFormValid=false;
  }
  if(!isEmailValid){
      isFormValid=false;
  }
  return isFormValid;
});