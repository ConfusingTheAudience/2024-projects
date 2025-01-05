export function hideMessage(element, delay = 1000) {
  setTimeout(function () {
    element.style.display = "none";
  }, delay);
}

export function hideMessage2(element, buttons, delay = 1000) {
  setTimeout(function () {
    element.style.visibility = "hidden";

    buttons.forEach(button => {
      button.disabled = false; 
      button.style.backgroundColor = ""; 
      button.style.color = "";
    });
  }, delay);
}

// NOTE
// execute the update or delete message to inform user about action happened
// used in discover.js and profileSettings.js
