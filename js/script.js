document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.action-button[data-target]');
    const spotlights = document.querySelectorAll('.character-spotlight');

    // Navigation Logic
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            document.querySelectorAll('.scene').forEach(s => s.classList.add('hidden'));
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Interaction Logic (Hints and direct flags removed)
    spotlights.forEach(spot => {
        spot.addEventListener('click', () => {
            const char = spot.getAttribute('data-character');
            
            if (char === 'gatekeeper') {
                const user = document.getElementById('gatekeeper-user').value;
                // Only shows a response if the specific SQLi pattern is used
                if (user.includes("' OR 1=1")) {
                    alert("The Sentinel bows his head. 'The path is clear. Proceed, Noble Scrivener.'");
                } else {
                    alert("The Sentinel remains motionless. 'Your words hold no weight here.'");
                }
            }
            
            if (char === 'portia') {
                alert("The portrait is masterfully crafted. Perhaps a closer inspection of the file itself would reveal more than the eye can see.");
            }
            
            if (char === 'alchemist') {
                alert("The liquid shimmer. It requires a scholar who can read the very strings of existence.");
            }
        });
    });
});

// Final Validation Logic
function checkFlag() {
    const input = document.getElementById('flagInput').value;
    const feedback = document.getElementById('feedback');
    
    // The solution is now hidden here in the logic
    if (input === "LNM{binary_potion_dissolved}") {
        feedback.innerText = "The Final Curtain Falls! You have mastered the Digital Dramaturgy.";
        feedback.style.color = "#e0ac40";
    } else {
        feedback.innerText = "Alas, the stage remains silent. The truth eludes you.";
        feedback.style.color = "#ff4d4d";
    }
}