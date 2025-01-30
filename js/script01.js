"use strict";

function calculatePension() {
    // Get the input and result elements
    const birthdateInput = document.getElementById('birthdate');
    const resultParagraphElem = document.getElementById('result');
    
    // Clear any previous result
    resultParagraphElem.textContent = "";

    // Convert input value to a Date object
    const birthdate = new Date(birthdateInput.value);

    // Check if the date is invalid
    if (isNaN(birthdate)) {
        resultParagraphElem.textContent = "Indtast en gyldig fødselsdato.";
        return;
    }

    // Define pension ages based on birthdate
    let retirementAge;

    if (birthdate < new Date('1955-07-01')) {
        retirementAge = "Du har opnået din folkepensionsalder.";
    } else if (birthdate <= new Date('1962-12-31')) {
        retirementAge = 67;
    } else if (birthdate <= new Date('1966-12-31')) {
        retirementAge = 68;
    } else if (birthdate <= new Date('1970-12-31')) {
        retirementAge = 69;
    } else if (birthdate <= new Date('1974-12-31')) {
        retirementAge = 70;
    } else if (birthdate <= new Date('1978-12-31')) {
        retirementAge = 71;
    } else if (birthdate <= new Date('1982-12-31')) {
        retirementAge = 72;
    } else if (birthdate <= new Date('1987-06-30')) {
        retirementAge = 72.5;
    } else if (birthdate <= new Date('1991-12-31')) {
        retirementAge = 73;
    } else if (birthdate <= new Date('1996-06-30')) {
        retirementAge = 73.5;
    } else {
        retirementAge = 74;
    }

    // Output the result
    resultParagraphElem.textContent = (typeof retirementAge === "string") 
        ? retirementAge 
        : `Du kan gå på pension ${retirementAge} år.`;
}

