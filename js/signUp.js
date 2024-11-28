// get check id

document.getElementById("registerId").onclick = function()
{
    //  get check box and email password and confirm password
    const myCheckBox = document.getElementById("policyCheckbox")
    const userEmail = document.getElementById('userEmailId').value.trim(); // Email input
    const userPassword = document.getElementById('userPasswordId').value.trim(); // Password input
    const userConfirmPassword = document.getElementById('userConfirmPasswordId').value.trim(); // Confirm password input
    

   // Check if checkbox is checked
if (myCheckBox.checked) {
    // Check if the required conditions are met
    
  if (userPassword !== userConfirmPassword) {
        // Passwords do not match
        alert('Passwords do not match. Please try again.');
    } else if (userEmail === "") {
        // Email is empty
        alert('Please enter a valid email.');
    }else if (userEmail !== "" && userPassword === userConfirmPassword) {
        alert('Created Account Successfully');
        window.location.href = 'index.html'; // Redirect to another page

       
    }
}
else {
    // Checkbox not checked
    alert('Please check the box or read terms and policy before proceeding.');
}

 
   


    
}