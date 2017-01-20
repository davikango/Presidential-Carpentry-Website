function validateTextBox() {
	var fnameBox = document.forms["contactForm"]["fname"];
	var lnameBox = document.getElementById("lname");
	var emailBox = document.getElementById("email");
	
	if(fnameBox.value == ""){
		fnameBox.focus();
		fnameBox.style.border = "solid 3px red";
		fnameError = "Please Enter your First Name";
		document.getElementById("fname_error").innerHTML = fnameError;
		$("fname_error").css("margin","0 auto");
		return false;
	}
	
	if(lnameBox.value == ""){
		lnameBox.focus();
		lnameBox.style.border = "solid 3px red";
		lnameError = "Please Enter the subject";
		document.getElementById("lname_error").innerHTML = lnameError;
		return false;
	}
	
	if(emailBox.value == ""){
		emailBox.focus();
		emailBox.style.border = "solid 3px red";
		emailError = "Please Enter your Email Address";
		document.getElementById("email_error").innerHTML = emailError;
		return false;
	}	
}