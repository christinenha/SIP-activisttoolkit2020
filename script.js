/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */
var fullItemList = document.getElementById("my-list");
                                           
/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function*/
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem, false);
}   

/* TODO: Declare the function checkOffList and add actions inside the { } */                     
function checkOffItem(clicked) {
    if (clicked.target.tagName == "LI") {
       clicked.target.classList.toggle("all-done");
   }
}

/* backtotop button */
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset >300) { // show backtotop button
      backToTopButton.style.display = "block";
  }
  else { // hide backtotop button
        backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo (0,0);
}
