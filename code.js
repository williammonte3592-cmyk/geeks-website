const header = document.querySelector("header");
header.style.backgroundColor = "blue";

const h1 = document.querySelector("h1")
 const headerparagraph = document.querySelector("#header-p");
const button = document.querySelector("#submit-button");
let fullname;
let email;
let message;

button.addEventListener("click", (event) => {
  //prevent form from refreshing the page
  
  event.preventDefault();

  fullname = document.querySelector("#full-name").value;
  email = document.querySelector("#email").value;
  message = document.querySelector("#message").value;

   h1.textContent = fullname;
   headerparagraph.textContent = message;

});


