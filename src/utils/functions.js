//Handle Phone Form Submission
export const handleFormSubmission = (phoneNumber, phoneNumberCode) => {
  let regex = /[A-Za-z]/gi;
  if (regex.test(phoneNumber)) {
    // We couldn’t find that phone number. Please try again.
    return "The number you entered contains letters";
  } else if (phoneNumber.length < 9) {
    return "The number you entered is less than 9 digits";
  } else if (phoneNumber.length > 9) {
    return "The number you entered is more than 9 digits";
  }
  window.location.href=`/reset_password/${phoneNumberCode}${phoneNumber}`
};

//Handle new password submission

export const handlePasswordRenewal = (password, verifyPassword, strength) => {
  if (password !== verifyPassword) {
    return "Passwords do not match, please try again";
  } else if (strength === "Weak") {
    return "Your password is not strong enough";
  } else {
    window.location.href = "/reset_password/success";
  }
};

//Handle Password Strength

export const handlePasswordStrength = (password) => {
  // Check progress
  var prog = [/[$@$!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/].reduce(
    (memo, test) => memo + test.test(password),
    0
  );

  // Length must be at least 8 chars
  if (prog > 2 && password.length > 7) {
    prog++;
  }
  // Display it
  var progress = "0";
  var strength = "";
  switch (prog) {
    case 0:
    case 1:
    case 2:
      strength = "Weak";
      progress = "25";
      document.documentElement.style.setProperty("--progress-color", "#f17645");
      break;
    case 3:
      strength = "Normal";
      progress = "50";
      document.documentElement.style.setProperty("--progress-color", "#f1a145");
      break;
    case 4:
      strength = "Good";
      progress = "75";
      document.documentElement.style.setProperty("--progress-color", "#11CDEF");
      break;
    case 5:
      strength = "Strong";
      progress = "100";
      document.documentElement.style.setProperty("--progress-color", "#38C985");
      break;
  }

  return { strength, progress };
};



//Handle Code Verification
export const handleCodeVerification=(code)=>{
window.location.href='/reset_password/2/newPassword'
}

