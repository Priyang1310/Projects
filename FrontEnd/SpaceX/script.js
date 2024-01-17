// const elements = document.getElementsByClassName("menu");

// // Attach a single click event listener to the window
// window.addEventListener("click", (event) => {
//   Array.from(elements).forEach((element) => {
//     // Check if the click was outside the element using `compareDocumentPosition`
//     if (element.compareDocumentPosition(event.target) & Node.DOCUMENT_POSITION_CONTAINED_BY !== 0) {
//       // Click is outside the element, set opacity to 0
//       element.style.opacity = 0;
//     }
//   });
// });

// Optionally, add a mouseleave listener for a smoother fade-out effect
// Array.from(elements).forEach((element) => {
//   element.addEventListener("mouseleave", () => {
//     // Start a transition to fade out the element (CSS transition required)
//     element.style.opacity = 0;
//   });
// });
function func() {
  let menuElement = document.querySelector(".menu");

  if (menuElement) {
    // Check if the element exists before modifying its style
    menuElement.style.opacity = 1;
    menuElement.style.tranform = `translateY(-100)`;
    menuElement.style.transition = "1.0s";
    menuElement.style.stager = "0.2s";

    console.log(menuElement);
  } else {
    console.error("Element with class 'menu' not found.");
  }
}


window.addEventListener("scroll", function () {
  let elements = document.getElementsByClassName("menu");
  
  Array.from(elements).forEach((element) => {
      element.style.opacity = 0;
    });
});


const menuButton = document.querySelector("#mb");
const closeButton = document.querySelector("#bt");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
    menu.style.opacity = 1; // Show the menu
});

closeButton.addEventListener("click", () => {
    menu.style.opacity = 0; // Hide the menu
    menu.style.tranform = `translateX(200)`;
    menu.style.transition = "1.2s";
});

document.addEventListener("click", (event) => {
    if (menu.parentElement !== event.target.parentElement) {
      menu.style.opacity = 0;
    }
  });