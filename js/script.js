document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.action-button[data-target]');
    const spotlights = document.querySelectorAll('.character-spotlight');

    // Scene Navigation
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            document.querySelectorAll('.scene').forEach(s => s.classList.add('hidden'));
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Spotlight Secrets (Hints and Flags)
    spotlights.forEach(spot => {
        spot.addEventListener('click', () => {
            const char = spot.getAttribute('data-character');
            
            if (char === 'gatekeeper') {
                const user = document.getElementById('gatekeeper-user').value;
                if (user.includes("' OR 1=1")) {
                    alert("The Gatekeeper trembles! 'Logic accepted. Take this: LNM{gatekeeper_logic_error}'");
                } else {
                    alert("The Gatekeeper scoffs: 'That is not a universal truth.'");
                }
            }
            
            if (char === 'portia') {
                alert("You peer into the image data... hidden in the Artist tag: LNM{portrait_metadata_found}");
            }
            
            if (char === 'alchemist') {
                alert("Deep within the strings of the potion: LNM{binary_potion_dissolved}");
            }
        });
    });
});

// Final Flag Validator
function checkFlag() {
    const input = document.getElementById('flagInput').value;
    const feedback = document.getElementById('feedback');
    
    if (input === "LNM{binary_potion_dissolved}") {
        feedback.innerText = "The Final Curtain Falls! You have saved the Kingdom.";
        feedback.style.color = "#e0ac40";
    } else {
        feedback.innerText = "The Alchemist frowns. That flag is incorrect.";
        feedback.style.color = "#ff4d4d";
    }
}