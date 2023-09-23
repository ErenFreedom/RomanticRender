function revealSong() {
    document.getElementById("revealButton").style.display = "none";
    document.querySelector(".song-container").style.display = "flex";
    
    // We'll use a slight delay to allow users to click the play button, 
    // then after the delay, show the "One last time" button.
    setTimeout(() => {
        document.getElementById("finalReveal").style.display = "block";
    }, 12000);  // Display "One last time" button 2 seconds after any click within song-container
}

function showFinalMessage() {
    document.getElementById("finalReveal").style.display = "none"; // Hide the "One last time" button
    document.querySelector(".song-container").style.display = "none"; // Hide the Spotify iframe
    document.querySelector(".heart-container").style.display = "flex"; // Show the message
}

function goToNextPage() {
    const currentPage = window.location.pathname.split("/").pop();
    
    switch(currentPage) {
        case 'page1.html':
            window.location.href = 'page2.html';
            break;
        case 'page2.html':
            window.location.href = 'page3.html';
            break;
        case 'page3.html':
            window.location.href = 'final.html';
            break;
        default:
            console.log("You're on the final page or an unrecognized page.");
            break;
    }
}
