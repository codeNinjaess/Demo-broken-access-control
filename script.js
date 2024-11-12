// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
let role = urlParams.get('role') || 'user'; // Default to 'user' if no role parameter

// Function to check access to the admin page
function checkAccess() {
    if (role === 'admin') {
        document.getElementById('admin-page').style.display = 'block';
        document.getElementById('counter-section').style.display = 'block';
        alert("Hello admin dearie, do you want chocolate?");
    } else {
        alert("Access Denied. Only admins can view this page.");
        document.getElementById('admin-page').style.display = 'none';
        document.getElementById('counter-section').style.display = 'none';
    }
}

// Function to increment the counter, only accessible to admins
function adminOnlyCounter() {
    if (role === 'admin') {
        counter++;
        document.getElementById("counter").innerText = counter;
        alert("Hello admin dearie, do you want chocolate?");
    } else {
        alert("Only admins can access this feature.");
    }
}

// Simulate voice detection (press "V" to show the counter section)
document.addEventListener("keydown", (event) => {
    if (event.key === "v") {
        alert("Voice command detected!");
        document.getElementById('counter-section').style.display = 'block';
    }
});

// Initialize counter
let counter = 0;
