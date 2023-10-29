// Get the button:
let mybutton = document.getElementById("myBtn");
let mybutton2 = document.getElementById("myBtn2");
let btnHidden = false;
var scrollPosition = 0; // variable to store the current scroll position

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  let windowHeight = window.innerHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollHeight - (scrollPosition + windowHeight) > 100) {
    // Adjust 100 based on desired proximity to bottom
    mybutton2.style.display = "block"; // Show 'go to bottom' button when not close to the bottom
  } else {
    mybutton2.style.display = "none"; // Hide 'go to bottom' button when near the bottom
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function goToBottom() {
  document.body.scrollTop = document.body.scrollHeight; // For Safari
  document.documentElement.scrollTop = document.documentElement.scrollHeight; // For Chrome, Firefox, IE, and Opera
}

function hideButton() {}

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;

  // Store the current scroll position
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Hide the buttons and disable scrolling when showing the image
  buttonContainer.classList.add("hide-element");
  btnHidden = true;
  document.body.classList.add("no-scroll");
}

function closeModal() {
  document.getElementById("modal01").style.display = "none";

  // Show the buttons and enable scrolling when closing the image
  buttonContainer.classList.remove("hide-element");
  btnHidden = false;
  document.body.classList.remove("no-scroll");

  // Restore the scroll position
  window.scrollTo(0, scrollPosition);
}
