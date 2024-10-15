
        // Get references to elements
        const playVideoButton = document.getElementById("play-video-btn");
        const videoContainer = document.getElementById("video-container");
        const video = document.getElementById("video");

        // Add event listener to the button
        playVideoButton.addEventListener("click", function() {
            // Show the video container
            videoContainer.style.display = "block";

            // Optionally, you can play the video automatically when the button is clicked
            // video.play();
        });