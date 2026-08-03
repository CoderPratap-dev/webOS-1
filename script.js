function updateClock() {
    const clock = document.getElementById("clock");

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    clock.textContent = `${hours}:${minutes} ${period}`;
}

updateClock();

setInterval(updateClock, 1000);

const filesIcon = document.querySelector(".desktop-icon");
const filesWindow = document.getElementById("files-window");
const closeFiles = document.getElementById("close-files");

filesIcon.addEventListener("click", function() {
    filesWindow.style.display = "block";
});

closeFiles.addEventListener("click", function() {
    filesWindow.style.display = "none";
});

const notesIcon = document.querySelectorAll(".desktop-icon")[1];

const notesWindow = document.getElementById("notes-window");

const closeNotes = document.getElementById("close-notes");


notesIcon.addEventListener("click", function() {
    notesWindow.style.display = "block";
});


closeNotes.addEventListener("click", function() {
    notesWindow.style.display = "none";
});