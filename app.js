let toggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");
var section = document.querySelector(".full-content");
var currentHeight = section.clientHeight;
toggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
let signin = document.querySelector(".signinform");
let signup = document.querySelector(".signupform");
let register = document.querySelector(".register");
let up = document.querySelector(".btn");
let up2 = document.querySelector(".btn2");

// ... (your existing code)

function signupfun() {
  // Create the "Sign Up" form HTML
  let s = `
            <h2 class="form-heading" style="margin-block-start: 2rem; margin-block-end: 2rem;">Sign Up</h2>
            <button class="close-btn"><i class="fas fa-times"></i></button>
            <form>
            <div class="form-group">
            <label for="signUpName">Name</label>
            <input type="text" class="form-control" id="signUpName" placeholder="Enter your name">
        </div>
        <div class="form-group">
            <label for="signUpEmail">Email</label>
            <input type="email" class="form-control" id="signUpEmail" placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="signUpPassword">Password</label>
            <input type="password" class="form-control" id="signUpPassword" placeholder="Enter your password">
        </div>
        <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password">
        </div>
        <button type="button" class="btn3 btn-primary btn-block">Sign Up</button>
            </form>
            <p class="mt-3">have an account? <a class="btn2" href="#">Sign In</a></p>  
    `;

  // Replace the HTML content of .signinform with the Sign Up form
  signin.innerHTML = s;

  // Attach the close button event listener to the new close button
  let newCloseBtn = document.querySelector(".signinform .close-btn");
  newCloseBtn.addEventListener("click", function () {
    if (signin.classList.contains("show")) {
      signin.classList.remove("show");
    }
  });
  let newbtn = document.querySelector(".btn2");
  console.log("hello");
  newbtn.addEventListener("click", signinback);
}
function signinfun() {
  signin.classList.add("show");
}
function signinback() {
  let signinbackHTML = `
    <h2 class="form-heading mb-4">Sign In</h2>
    <button class="close-btn"><i class="fas fa-times"></i></button>
    <form>
        <div class="form-group">
            <label for="signInEmail">Email</label>
            <input type="email" class="form-control" id="signInEmail" placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="signInPassword">Password</label>
            <input type="password" class="form-control" id="signInPassword" placeholder="Enter your password">
        </div>
        <button type="button" class="btn btn-primary btn-block">Sign In</button>
    </form>
    <p class="mt-3">Don't have an account? <a class="btn2" href="#">Sign Up</a></p>
       
    `;

  signin.innerHTML = signinbackHTML;

  // Attach the close button event listener to the new close button
  let newCloseBtn = document.querySelector(".signinform .close-btn");
  newCloseBtn.addEventListener("click", function () {
    if (signin.classList.contains("show")) {
      signin.classList.remove("show");
    }
  });

  // Attach the event listener to the "Sign Up" button inside the "Sign In" form
  let signupBtn = document.querySelector(".signinform .btn2");
  signupBtn.addEventListener("click", signupfun);
}
let newCloseBtn = document.querySelector(".signinform .close-btn");
newCloseBtn.addEventListener("click", function () {
  if (signin.classList.contains("show")) {
    signin.classList.remove("show");
  }
});

let backsign = document.querySelector(".btn2");
backsign.addEventListener("click", function () {
  let backsignhtml = `<h2 class="form-heading mb-4">Sign In</h2>
    <button class="close-btn"><i class="fas fa-times"></i></button>
    <form>
        <div class="form-group">
            <label for="signInEmail">Email</label>
            <input type="email" class="form-control" id="signInEmail" placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label for="signInPassword">Password</label>
            <input type="password" class="form-control" id="signInPassword" placeholder="Enter your password">
        </div>
        <button type="button" class="btn btn-primary btn-block">Sign In</button>
    </form>
    <p class="mt-3">Don't have an account? <a class="btn2" href="#">Sign Up</a></p>`;
  signin.innerHTML = backsignhtml;
});

register.addEventListener("click", signinfun);

up2.addEventListener("click", function () {
  signupfun();
});