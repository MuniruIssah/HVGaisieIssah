  //Handle Form Submission
  export const handleFormSubmission = (phoneNumber,phoneNumberCode) => {
    let regex = /[A-Za-z]/gi;
    if (regex.test(phoneNumber)) {
      // We couldn’t find that phone number. Please try again.
      return "The number you entered contains letters";
    } else if (phoneNumber.length < 9) {
      return "The number you entered is less than 9 digits";
    } else if(phoneNumber.length>9) {
      return "The number you entered is more than 9 digits";
    }
    return '';
  };