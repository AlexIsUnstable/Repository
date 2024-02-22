// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
    // Wait for 30 seconds (30000 milliseconds) before changing text color
    setTimeout(function() {
        // Get the element with the id 'rainbow-text'
        var rainbowText = document.getElementById('rainbow-text');
        
        // Generate a random hue value (0-360) for the rainbow color
        var hue = Math.floor(Math.random() * 361);
        
        // Change the text color to a rainbow color using HSL format
        rainbowText.style.color = 'hsl(' + hue + ', 100%, 50%)';
    }, 30000); // 30 seconds
});
