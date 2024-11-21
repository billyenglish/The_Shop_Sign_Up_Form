/*
    FIRST NAME PARAMETERS
    The Validation of the User's First Name.
    If the User First Name Value is Empty it should alert Please Add Your Name.
    The User First Name Cannot equal a Number.
    The User First Name length has to be longer then 2 characters.
*/

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const userEmail = document.querySelector("#user_email");
const phoneNumber = document.querySelector("#user_phone_number");
const userPassword = document.querySelector("#user_password");
const confirmPassword = document.querySelector("#confirm_password");
const createAccount = document.querySelector("#create-account");
const inputModal = document.querySelectorAll(".error-modal");

const firstNameValidated = () => {
    const firstNameValue = firstName.value;
    const firstNameModal = inputModal[0];

    (
        (firstNameValue.match(/[a-zA-Z]/g) && firstNameValue.length > 2)
            ?
                (
                    (firstNameModal.textContent = "First Name Valid") &&
                    (firstNameModal.style.color = "green") &&
                    (firstName.style.border = ".2rem solid green") &&
                    (firstNameModal.style.display = "block") &&
                    (createAccount.disabled = false)
                )
            :
                (
                    (firstNameModal.textContent = "First Name Invalid") &&
                    (firstNameModal.style.color = "red") &&
                    (firstName.style.border = ".2rem solid red") &&
                    (firstNameModal.style.display = "block") &&
                    (createAccount.disabled = true)
                )
    )
}

firstName.addEventListener("keyup", firstNameValidated);


lastName.addEventListener("keyup", () => {
    const lastNameValue = lastName.value;
    const lastNameModal = inputModal[1];

    (
        (lastNameValue.match(/[(a-zA-Z)+]/g) && lastNameValue.length > 2)
            ?
                (
                    (lastNameModal.textContent = "Last Name Valid") &&
                    (lastNameModal.style.color = "green") &&
                    (lastNameModal.style.display = "block") &&
                    (createAccount.disabled = false)
                )
            :
                (
                    (lastNameModal.textContent = "Last Name Invalid") &&
                    (lastNameModal.style.color = "red") &&
                    (lastNameModal.style.display = "block") &&
                    (createAccount.disabled = true)
                )
    )

});


userEmail.addEventListener("keyup", () => {
    const userEmailValue = userEmail.value;
    const userEmailModal = inputModal[2];

    userEmailValue.match(/($\.com|.edu|.org)/) ? console.log("Valid") : console.log("Invalid")

});

phoneNumber.addEventListener("keyup", () => {
    const userPhoneNumberValue = phoneNumber.value;
    const phoneNumberModal = inputModal[3];

    (
        userPhoneNumberValue.match(/^\d{10}$/)
            ?
                (
                    (phoneNumberModal.textContent = "Phone Number Valid") &&
                    (phoneNumberModal.style.color = "green") &&
                    (phoneNumberModal.style.display = "block")
                )
            :
                (
                    (phoneNumberModal.textContent = "Phone Number Invalid") &&
                    (phoneNumberModal.style.color = "red") &&
                    (phoneNumberModal.style.display = "block")
                )
    )

});