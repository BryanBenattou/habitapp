
// --- Function to automate current date ---

function displayCurrentDate() {

    // Object of date is assigned to variable currentDate
    const currentDate = new Date();

    // current date is converted into a string by the method .toDateString
    const dateString = currentDate.toDateString();

    // dateElement gets the element by it's Id, which is "current-date"
    const dateElement = document.getElementById("current-date");

    // the date is assigned to the element 
    dateElement.textContent = dateString;
  }

  // the funection is called to execute on load
  displayCurrentDate();

