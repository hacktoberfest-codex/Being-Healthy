let toggle=document.querySelector('.nav-toggle')
let links=document.querySelector('.links')
var section = document.querySelector(".full-content");
var currentHeight = section.clientHeight;
toggle.addEventListener('click',function(){
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }
    else{
        links.classList.add("show-links")
    
    }
})
function showSignUpForm() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
}

function showSignInForm() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
}

function signIn() {
    alert('Sign In button clicked');
}

function signUp() {
    alert('Sign Up button clicked');
}