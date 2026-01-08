document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.action-button[data-target]');
    const spotlights = document.querySelectorAll('.character-spotlight');

    // Navigation Logic: Managing the flow of the Acts
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            document.querySelectorAll('.scene').forEach(s => s.classList.add('hidden'));
            const nextScene = document.getElementById(targetId);
            nextScene.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Interaction Logic: The subtle hints of the play
    spotlights.forEach(spot => {
        spot.addEventListener('click', () => {
            const char = spot.getAttribute('data-character');
            
            if (char === 'gatekeeper') {
                const user = document.getElementById('gatekeeper-user').value;
                if (user.includes("' OR 1=1")) {
                    alert("The Sentinel's eyes glow with a dim light. 'The Tautology... the logic that cannot be broken. You may pass into the archives, Scrivener.'");
                } else {
                    alert("The Sentinel remains a statue. 'Your identity is tied to a specific form. I require a truth that is universal.'");
                }
            }
            
            if (char === 'portia') {
                alert("The canvas feels heavy. You suspect that if you were to 'examine' the file's metadata, you would find a 'comment' left by the artist.");
            }
            
            if (char === 'alchemist') {
                alert("The potion is a compiled mystery. Only one who can read the 'strings' of a binary soul will find what is hidden in its code.");
            }
        });
    });
});

// Final Validation Logic
function checkFlag() {
    const input = document.getElementById('flagInput').value;
    const feedback = document.getElementById('feedback');
    
    if (input === "LNM{binary_potion_dissolved}") {
        feedback.innerText = "The applause thunders through the hall! You have decoded the drama and saved the realm.";
        feedback.style.color = "#e0ac40";
        feedback.style.fontSize = "1.2em";
    } else {
        feedback.innerText = "Alas! The stage remains shrouded in shadow. That revelation is not the one we seek.";
        feedback.style.color = "#ff4d4d";
    }
}