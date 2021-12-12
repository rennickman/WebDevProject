// Inputs
const firstNameInput = document.getElementById("firstNameInput");
const surnameInput = document.getElementById("surnameInput");
const emailInput = document.getElementById("emailInput");
const locationInput = document.getElementById("locationInput");

const petNameInput = document.getElementById("petNameInput");
const petTypeInput = document.getElementById("petTypeInput");
const breedInput = document.getElementById("breedInput");
const petCommentsInput = document.getElementById("petCommentsInput");

const startDateInput = document.getElementById("startDateInput");
const numDaysInput = document.getElementById("numDaysInput");
const reasonInput = document.getElementById("reasonInput");
const bookingCommentInput = document.getElementById("bookingCommentsInput");


// Buttons
const personalNextButton = document.getElementById("personalNextButton");
const contactUsButton = document.getElementById("contactUsButton");

const petInfoNextButton = document.getElementById("petInfoNextButton");
const addAnotherPetButton = document.getElementById("addAnotherPetButton");

const finishButton = document.getElementById("finishButton");

const confirmButton = document.getElementById("confirmButton");


// HTML Elements
const petInfoTitleHtml = document.getElementById("petInfoTitle");

const confirmNameHtml = document.getElementById("confirmName");
const confirmEmailHtml = document.getElementById("confirmEmail");
const confirmStartHtml = document.getElementById("confirmStart");
const confirmDaysHtml = document.getElementById("confirmDays");
const confirmPetsHtml = document.getElementById("confirmPets");


// Form Containers
const personalFormSection = document.getElementById("personalFormSection");
const petInfoFormSection = document.getElementById("petInfoFormSection");
const bookingInfoFormSection = document.getElementById("bookingInfoFormSection");
const confirmationFormSection = document.getElementById("confirmationFormSection");


// Global Variables
let firstNameValue = "";
let surnameValue = "";
let emailValue = "";
let locationValue = "";

let arrayOfPets = [];

let startDateValue = "";
let numDaysValue = "";
let reasonValue = "";
let bookingCommentValue = "";


// Method to create a Pet
const createAPet = () => {

    // Create a new object with values from Pet Info Inputs
    let newPet = {
        name: petNameInput.value,
        type: petTypeInput.value,
        breed: breedInput.value,
        comments: petCommentsInput.value
    };

    return newPet;
};





// Event Listener for the Next Button on Personal Info Form
personalNextButton.addEventListener("click", e => {
    // Prevent refresh
    e.preventDefault();

    // Check all Inputs have been completed
    if (firstNameInput.value && surnameInput.value && emailInput.value && locationInput.value) {

        // Check email is valid
        if (emailInput.value.includes("@")) {

        // Set Value of Personal Info Global Vars
        firstNameValue = firstNameInput.value;
        surnameValue = surnameInput.value;
        emailValue = emailInput.value;
        locationValue = locationInput.value;

        // Hide Personal Info Form
        personalFormSection.style.display = "none";

        // Display Pet Info Form
        petInfoFormSection.style.display = "flex";

        } else {
            // Throw alert if email is not valid
            alert("Please enter valid email address");
        }

    } else {
        // Throw Alert if all Inputs haven't been completed
        alert("Please complete all fields");
    }
});



// Event Listener for the Next Button on Pet Info Form
petInfoNextButton.addEventListener("click", e => {
    // Prevent refresh
    e.preventDefault();

    // Check all Inputs have been completed
    if (petNameInput.value && petTypeInput.value && breedInput.value) {

        // Create a Pet
        let newPet = createAPet();

        // Add to Array of Pets
        arrayOfPets.push(newPet);

        // Hide Pet Info Form
        petInfoFormSection.style.display = "none";

        // Display Booking Info Form
        bookingInfoFormSection.style.display = "flex";

    } else {
        // Throw Alert if all Inputs haven't been completed
        alert("Please complete all required fields");
    }
});



addAnotherPetButton.addEventListener("click", e => {
    // Prevent refresh
    e.preventDefault();

    // Check all Inputs have been completed
    if (petNameInput.value && petTypeInput.value && breedInput.value) {

        // Create a Pet
        let newPet = createAPet();

        // Add to Array of Pets
        arrayOfPets.push(newPet);

        // Reset Inputs
        petNameInput.value = "";
        petTypeInput.value = "";
        breedInput.value = "";
        petCommentsInput.value = "";

        // Update Pet Info Title HTML
        petInfoTitleHtml.innerHTML = `Pet #${arrayOfPets.length + 1} Info`;

    } else {
        // Throw Alert if all Inputs haven't been completed
        alert("Please complete all required fields");
    }
});



finishButton.addEventListener("click", e => {
    // Prevent refresh
    e.preventDefault();

    // Check all Inputs have been completed
    if (startDateInput.value && numDaysInput.value && reasonInput.value) {

        // Set Value of Personal Info Global Vars
        startDateValue = startDateInput.value;
        numDaysValue = numDaysInput.value;
        reasonValue = reasonInput.value;
        bookingCommentValue = bookingCommentInput.value;

        // Set values of Confirmation Form HTML
        confirmNameHtml.innerHTML = firstNameValue + " " + surnameValue;
        confirmEmailHtml.innerHTML = emailValue;
        confirmStartHtml.innerHTML = startDateValue;
        confirmDaysHtml.innerHTML = numDaysValue;
        confirmPetsHtml.innerHTML = arrayOfPets.length;

        // Hide Booking Info Form
        bookingInfoFormSection.style.display = "none";

        // Display Confirmation Form
        confirmationFormSection.style.display = "flex";

    } else {
        // Throw Alert if all Inputs haven't been completed
        alert("Please complete all required fields");
    }
});



confirmButton.addEventListener("click", e => {
    // Prevent Refresh
    e.preventDefault();

    // Throw confirmation Alert
    alert("Your'e booking has been confirmed");

    // Direct to Homepage
    window.location.href = './index.html';
});




