// app.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggleButton');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const textContainer = document.getElementById('textContainer');
            const divID = button.getAttribute('div-id');

            if (divID.style.display === "none") {
                divID.style.display = "block";
              } else {
                divID.style.display = "none";
            }
        });
    });
});

/**
 * Toggles the visibility of the div with the given id
 * @param {string} divID ID of the div block to toggle
 */
function toggleVisibility(divID) {
    console.log(divID);
    if (divID.style.display === "block") {
        divID.style.display = "none";
    } else {
        divID.style.display = "block";
    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
    Taken from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
function checkMenuResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * Handles full-row expansion for grid-based blog cards.
 */
function toggleDetails(cardId, targetId) {
  const currentCard = document.getElementById(cardId)
  const targetPanel = document.getElementById(targetId);
  const panelCurrentlyOpen = targetPanel.classList.contains('active');
  const cardCurrentlyOpen = targetPanel.classList.contains('active');

  // Close all open panels first
  document.querySelectorAll('.expansion-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('active');
  });

  // Toggle the clicked card/panel if it wasn't already opened
  if (!panelCurrentlyOpen) {
    targetPanel.classList.add('active');
    currentCard.classList.add('active');
  }
}
