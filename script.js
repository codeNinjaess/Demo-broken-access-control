let role = 'admin'; // Change this to 'admin' to allow access to admin-only features
let counter = 0;

// Function to check access to the admin page
function checkAccess() {
    const alertBox = document.getElementById('alert');
    if (role === 'admin') {
        // Show the admin page and counter section with smooth reveal
        document.getElementById('admin-page').classList.add('show');
        document.getElementById('counter-section').classList.add('show');

        // Display access message for admin
        alertBox.textContent = "Access Granted to Admin Page!";
        alertBox.style.color = 'green';

        // Show custom alert for admin access
        alert("Hello admin dearie, do you want chocolate?");
    } else {
        // Access denied message for non-admin users
        alertBox.textContent = "Access Denied. Only admins can view this page.";
        alertBox.style.color = 'red';
    }
}

// Function to increment the counter, only accessible to admins
function adminOnlyCounter() {
    if (role === 'admin') {
        counter++;
        document.getElementById("counter").innerText = counter;
        alert("Hello lovely admin! You want some chocolate?");
    } else {
        alert("Only admins can access this feature.");
    }
}

// Simulate voice detection (press "V" to show the counter section)
document.addEventListener("keydown", (event) => {
    if (event.key === "v") { // Press "v" to simulate voice command
        alert("Voice command detected!");
        document.getElementById('counter-section').classList.add('show');
    }
});
