import {loadPages} from "/src/model.js"

let isLoggedIn = false;

function changeRute(page) {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');

    if (pageID) {
        loadPages(pageID);
    } else{
        loadPages('home');
    }
}

function initURLListener() {
    window.addEventListener('hashchange', () => {
        changeRute();
    });
    changeRute();
}

function initPageListners(){
    const loadBtn = document.querySelector('loadBtn');

    if (loadBtn) {
        loadBtn.addEventListener('click', loadData) ;
    }
}

function loadData() {
    const data = document.querySelector('data');
    showToast("Loading data...","loading");

    setTimeout(() => {
        data.innerHTML =`
        <h2>Student Data</h2>
        <p>Name: John Doe</p>
        <p>Email: abc.com</p>
        `;
        showToast("Data loaded successfully!", "success");
    }, 2000);
}

function initLogin() {
    const loginBtn = document.querySelector('loginBtn');
    const loginModal = document.querySelector('loginModal');
    const closeModal = document.querySelector('closeModal');
    const loginForm = document.querySelector('loginForm');

    logInBtn.addEventListener('click', () => {
        if (isLoggedIn) {
            loginBtn.textContent = "Logout";
            isLoggedIn = false;
            loginBtn.textContent = "Login";
    
            showToast("Logged out successfully!", "success");
            return;
        }

        loginModal.classList.add ('modal--show');
    });

    closeModal.addEventListener('click', () => {
        loginModal.classList.remove ('modal--show');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Simple validation (replace with actual authentication logic)
        if(email === ""){
            showToast("Please fill in the email field.", "error");
            return;
        }

        if(email.length < 5){
            showToast("Email must be at least 5 characters long.", "error");
            return;
        }

        if(!email.includes("@")){
            showToast("Please enter a valid email address.", "error");
            return;
        }


        if(password === ""){
            showToast("Please fill in the password field.", "error");
            return;
        }

        if(password.length < 6){
            showToast("Password must be at least 6 characters long.", "error");
            return;
        }


        isLoggedIn = true;
        loginBtn.innerHTML = "Logout";
        showToast("Login successful!", "success");
        loginModal.classList.remove ('modal--show');
        loginForm.reset();
    });


}

function initApp() {
    initURLListener();
    initLogin();
}

 
initApp();