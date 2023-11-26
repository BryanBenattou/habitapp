    
    // Get all checkbox inputs
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Get the counter display element
    const counterDisplay = document.getElementById('counterDisplay');

    // Get the reset button element
    const resetButton = document.getElementById('resetButton');

    // Function to increment the counter and update the counter display
    function incrementCounter() {
      let counter = getCounter();
      if (this.checked) {
        if (this.classList.contains("skill")) {
          counter+= 200; //Increment by 200 for the "skill" class
        } else {
          counter += 100; //Increment by 100 for other classes
        } 
      } else {
        if (this.classList.contains("skill")) {
          counter -= 200; // Decrement by 200 when "skill" checkbox is unchecked
        } else {
          counter -= 100; // Decrement by 100 when other checkboxes are unchecked
        }
      }

      storeCounter(counter);
      counterDisplay.textContent = counter;
    }



    // Function to reset the counter to 0 and update the counter display
    function resetCounter() {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      storeCounter(0);
      counterDisplay.textContent = 0;
    }



    // Function to retrieve the counter value from localStorage
    function getCounter() {
      return parseInt(localStorage.getItem('counter')) || 0;
    }



    // Function to store the counter value in localStorage
    function storeCounter(counter) {
      localStorage.setItem('counter', counter);
    }



    // Attach event listener to each checkbox input
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', incrementCounter);
    });



    // Attach event listener to the reset button
    resetButton.addEventListener('click', resetCounter);

    

    // Initialize counter display on page load
    const initialCounter = getCounter();
    counterDisplay.textContent = initialCounter; 

    