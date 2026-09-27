



/* CANVAS LOGIC */
// Get the canvas element where Processing.js will render the drawing
const canvas = document.getElementById("myCanvas");

// Add a variable to check if mouse is pressed
var isMousePressed = false;
let brushColor = null;

// Listen for mousedown and mouseup events from the canvas
canvas.addEventListener('mousedown', (event) => 
{
    isMousePressed = true;
});
canvas.addEventListener('mouseup', () => 
{
    isMousePressed = false; 
});


// Initialize Processing.js class with the canvas element
var p = new Processing(canvas, function(p) 
{
    
    // Setup function runs once when the sketch starts
    p.setup = function() 
    {
        p.size(400, 400); // Set canvas size
        p.background(255); // Set background color (white)
    };

    brushColor = p.color(0, 0, 0); // Default color is black

    // Draw function runs continuously (for animations, etc.)
    p.draw = function() 
    {
        if (isMousePressed) 
        {
            p.fill(brushColor); // Set the fill color
            p.noStroke(); // No outline for the circle
            p.ellipse(p.mouseX, p.mouseY, slider.value, slider.value); // Draw a circle at the mouse position
        }
    };

    p.resetCanvas = function() 
    {
        p.background(255); // Reset the background to the body color
    };
});

document.getElementById('resetButton').addEventListener('click', function() 
{
    p.resetCanvas();
});


/* BRUSH SIZE SLIDER LOGIC */
// Get slider and display elements
const slider = document.getElementById('verticalSlider');
const sliderValue = document.getElementById('sliderValue');

// Initial slider update so the slider text corresponds to current position on startup
sliderValue.textContent = slider.value;

// Update the displayed value when the slider changes
slider.addEventListener('input', () => 
{
    sliderValue.textContent = slider.value;
});

const debugBtnText = document.getElementById('debugForButtons');

/* BUTTONS LOGIC */
var buttonPressCount = 0;
var lastButtonPressed;

function showMessage(btnNumber) 
{
    buttonPressCount ++;
    if((lastButtonPressed === btnNumber) & (buttonPressCount > 1))
    {
        debugBtnText.textContent = "Hey! You clicked button number " + btnNumber + "! How many more times are you going to click me >:/";
    }
    else
    {
        debugBtnText.textContent = "Hey! You clicked button number " + btnNumber + "!";
    }
    if(lastButtonPressed === btnNumber)
    {
        buttonPressCount = 0;
    }
    lastButtonPressed = btnNumber;
}


const colorBtnText = document.getElementById('colorButton')
var Counter = 0;
function changeColor() 
{
    const colorOptions = [
        { rgb: [255, 0, 0], name: "Red" },
        { rgb: [0, 255, 0], name: "Green" },
        { rgb: [0, 0, 255], name: "Blue" },
        { rgb: [255, 255, 0], name: "Yellow" },
        { rgb: [255, 0, 255], name: "Magenta" },
        { rgb: [0, 255, 255], name: "Cyan" },
        { rgb: [0,0,0], name: "Black"}
    ];

    const selectedColor = colorOptions[Counter % colorOptions.length];
    brushColor = p.color(...selectedColor.rgb);
    Counter++;
    colorBtnText.textContent = "Color: " + selectedColor.name;
    console.log("Brush color changed to: " + selectedColor.name);
}

// // COLOR SELECTION POPUP

// // References
// const popupOverlay = document.getElementById("popupOverlay"); // Popup overlay ref
// const closePopup = document.getElementById("closePopup"); // Popup closing button ref
// const openPopup = document.getElementById("colorButton") // Popup opening button ref

// // Show the pop-up
// openPopup.addEventListener("click", () => {
//     popupOverlay.classList.remove("hidden");
// });

// // Hide the pop-up
// closePopup.addEventListener("click", () => {
//     popupOverlay.classList.add("hidden");
// });

// // Optional: Close the pop-up when clicking outside the window
// popupOverlay.addEventListener("click", (event) => {
//     if (event.target === popupOverlay) {
//         popupOverlay.classList.add("hidden");
//     }
// });







