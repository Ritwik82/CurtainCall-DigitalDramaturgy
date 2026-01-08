// Navigation logic
function showNext(currentId, nextId) {
    document.getElementById(currentId).classList.add('hidden');
    document.getElementById(nextId).classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Act I: ROT13 Cipher
function solveAct1() {
    const val = document.getElementById('input-act1').value.trim();
    if (val === "LNM{To_be_or_not_to_be_bash}") {
        alert("The stars align! You may proceed.");
        document.getElementById('next-act1').classList.remove('hidden');
    } else {
        alert("The scroll remains dark.");
    }
}

// Act II: SQL Injection
function solveAct2() {
    const val = document.getElementById('gatekeeper-user').value;
    if (val.includes("' OR 1=1")) {
        alert("The Sentinel bows. 'Logic accepted. LNM{gatekeeper_logic_error}'");
        document.getElementById('next-act2').classList.remove('hidden');
    } else {
        alert("The Sentinel is unmoved.");
    }
}

// Act III: Metadata
function solveAct3() {
    const val = document.getElementById('input-act3').value.trim();
    if (val === "LNM{portrait_metadata_found}") {
        alert("The portrait shifts! A passage is revealed.");
        document.getElementById('next-act3').classList.remove('hidden');
    } else {
        alert("The art reveals nothing to you.");
    }
}

// Act IV: Final Flag
function checkFlag() {
    const val = document.getElementById('flagInput').value.trim();
    const feedback = document.getElementById('feedback');
    if (val === "LNM{binary_potion_dissolved}") {
        feedback.innerText = "VICTORY! The Kingdom is saved. The curtain falls.";
        feedback.style.color = "#e0ac40";
    } else {
        feedback.innerText = "That is not the final truth.";
        feedback.style.color = "red";
    }
}