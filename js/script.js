document.addEventListener('DOMContentLoaded', () => {
    // Select all action buttons
    const actionButtons = document.querySelectorAll('.action-button');
    // Select all character spotlight elements
    const characterSpotlights = document.querySelectorAll('.character-spotlight');

    // Function to show a scene
    const showScene = (sceneId) => {
        // Hide all scenes first
        document.querySelectorAll('.scene').forEach(scene => {
            scene.classList.add('hidden');
        });

        // Show the target scene
        const targetScene = document.getElementById(sceneId);
        if (targetScene) {
            targetScene.classList.remove('hidden');
            // Optional: Scroll to the new scene for better UX
            targetScene.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Event listener for action buttons
    actionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetSceneId = event.target.dataset.target;
            if (targetSceneId) {
                showScene(targetSceneId);
            }
        });
    });

    // Event listener for character spotlights (for a fun interactive effect)
    characterSpotlights.forEach(spotlight => {
        spotlight.addEventListener('click', (event) => {
            const characterName = event.target.dataset.character;
            alert(`Ah, a soliloquy from the noble ${characterName}!`);
            // You could expand this to show a modal with more text or an animation
        });
    });

    // Initially show the prologue scene
    showScene('prologue');
});