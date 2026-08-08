/* -------------------------
   Clock
------------------------- */

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


/* -------------------------
   Desktop Icons
------------------------- */

const desktopIcons =
    document.querySelectorAll(".desktop-icon");


/* Files */

const filesWindow =
    document.getElementById("files-window");

const closeFiles =
    document.getElementById("close-files");


desktopIcons[0].addEventListener("click", function() {

    filesWindow.style.display = "block";

});


closeFiles.addEventListener("click", function() {

    filesWindow.style.display = "none";

});


/* Notes */

const notesWindow =
    document.getElementById("notes-window");

const closeNotes =
    document.getElementById("close-notes");


desktopIcons[1].addEventListener("click", function() {

    notesWindow.style.display = "block";

});


closeNotes.addEventListener("click", function() {

    notesWindow.style.display = "none";

});


/* Settings */

const settingsWindow =
    document.getElementById("settings-window");

const closeSettings =
    document.getElementById("close-settings");


desktopIcons[2].addEventListener("click", function() {

    settingsWindow.style.display = "block";

});


closeSettings.addEventListener("click", function() {

    settingsWindow.style.display = "none";

});


/* -------------------------
   Taskbar Buttons
------------------------- */

const taskFiles =
    document.getElementById("task-files");

const taskNotes =
    document.getElementById("task-notes");

const taskSettings =
    document.getElementById("task-settings");


/* Files */

taskFiles.addEventListener("click", function() {

    filesWindow.style.display = "block";

});


/* Notes */

taskNotes.addEventListener("click", function() {

    notesWindow.style.display = "block";

});


/* Settings */

taskSettings.addEventListener("click", function() {

    settingsWindow.style.display = "block";

});

/* -------------------------
   Start Menu
------------------------- */

const startButton =
    document.getElementById("start-button");

const startMenu =
    document.getElementById("start-menu");


startButton.addEventListener("click", function() {

    if (startMenu.style.display === "block") {

        startMenu.style.display = "none";

    } else {

        startMenu.style.display = "block";

    }

});


const menuFiles =
    document.getElementById("menu-files");

const menuNotes =
    document.getElementById("menu-notes");

const menuSettings =
    document.getElementById("menu-settings");


menuFiles.addEventListener("click", function() {

    filesWindow.style.display = "block";

    startMenu.style.display = "none";

});


menuNotes.addEventListener("click", function() {

    notesWindow.style.display = "block";

    startMenu.style.display = "none";

});


menuSettings.addEventListener("click", function() {

    settingsWindow.style.display = "block";

    startMenu.style.display = "none";

});

const windows = document.querySelectorAll(".app-window");

windows.forEach(function(windowElement) {

    const header = windowElement.querySelector(".window-header");

    let isDragging = false;

    let offsetX = 0;
    let offsetY = 0;


    header.addEventListener("mousedown", function(event) {

        if (event.target.tagName === "BUTTON") {
            return;
        }

        isDragging = true;

        const rect = windowElement.getBoundingClientRect();

        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        windowElement.style.transform = "none";

    });


    document.addEventListener("mousemove", function(event) {

        if (!isDragging) {
            return;
        }

        windowElement.style.left =
            (event.clientX - offsetX) + "px";

        windowElement.style.top =
            (event.clientY - offsetY) + "px";

    });


    document.addEventListener("mouseup", function() {

        isDragging = false;

    });

});

/* -------------------------
   Notes Auto Save
------------------------- */

const notesText = document.getElementById("notes-text");


const savedNotes = localStorage.getItem("nova-notes");

if (savedNotes !== null) {
    notesText.value = savedNotes;
}


notesText.addEventListener("input", function() {

    localStorage.setItem(
        "nova-notes",
        notesText.value
    );

});