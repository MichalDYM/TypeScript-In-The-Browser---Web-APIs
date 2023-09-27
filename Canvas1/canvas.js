
window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        // Save the current context state
        ctx.save();

        // Clear the canvas and reset transformations
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // Apply rotation
        ctx.rotate(20 * Math.PI / 180);

        // Draw rectangles
        ctx.fillRect(50, 50, 150, 150);
        ctx.clearRect(49, 40, 50, 50);
        ctx.fillRect(150, 150, 200, 200);

        // Restore the context state
        ctx.restore();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Variable for drawing
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 15;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // Event listeners for drawing
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }
    
    // Function to restart drawing
    function restartDrawing() {
        clearCanvas();
        // Optionally reset any other drawing-related variables or states here
    }
    
    // Event listener to restart drawing (you can call this function when needed)
    document.getElementById("restartButton").addEventListener("click", restartDrawing);
    
});




