// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
let role = urlParams.get('role') || 'user'; // Default to 'user' if no role parameter

// Function to check access to the admin page
function checkAccess() {
    if (role === 'admin') {
        document.getElementById('admin-page').classList.add('show');
        document.getElementById('counter-section').classList.add('show');
        alert("Hello Admin! Ready to manage the site?");
    } else {
        alert("Access Denied. Only admins can view this page.");
        document.getElementById('admin-page').classList.remove('show');
        document.getElementById('counter-section').classList.remove('show');
    }
}

// Voice Recording Simulation
function startVoiceRecording() {
    if (role === 'admin') {
        document.getElementById("voice-status").innerText = "Recording in progress...";
        alert("Recording started!");
        setTimeout(() => {
            document.getElementById("voice-status").innerText = "Recording complete!";
            alert("Recording saved.");
        }, 3000); // Simulates a 3-second recording
    } else {
        alert("Only admins can access this feature.");
    }
}

// Function to increment the counter, only accessible to admins
function adminOnlyCounter() {
    if (role === 'admin') {
        counter++;
        document.getElementById("counter").innerText = counter;
    } else {
        alert("Only admins can access this feature.");
    }
}

// Initialize counter
let counter = 0;
