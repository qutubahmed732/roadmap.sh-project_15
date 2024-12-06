import { DateTime } from './node_modules/luxon/src/luxon.js';
import { DateTime } from 'luxon';
    // Get the form and result display elements


    const form = document.getElementById('age-form');
    const result = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission

      // Get the user input
      const birthdateInput = document.getElementById('birthdate').value;
      
      // Parse the input as a Luxon DateTime
      const birthDate = DateTime.fromISO(birthdateInput);

      // Check if the input is a valid date
      if (!birthDate.isValid) {
        result.textContent = "Invalid date. Please enter a valid date in YYYY-MM-DD format.";
        return;
      }

      // Calculate the age
      const now = DateTime.now();
      const age = now.diff(birthDate, "years").years;

      // Check if the birthdate is in the future
      if (birthDate > now) {
        result.textContent = "Birthdate cannot be in the future!";
      } else {
        // Display the age
        result.textContent = `You are approximately ${Math.floor(age)} years old.`;
      }
    });