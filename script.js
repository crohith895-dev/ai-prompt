
// Generate Prompt Function
function generatePrompt() {

    // Get input values
    let role = document.getElementById("role").value.trim();
    let task = document.getElementById("task").value.trim();
    let context = document.getElementById("context").value.trim();
    let constraints = document.getElementById("constraints").value.trim();
    let format = document.getElementById("format").value;

    // Check empty fields
    if (!role || !task || !context || !constraints || !format) {
        alert("Please fill in all the fields!");
        return;
    }

    // Create the prompt
    let prompt = `Role:
${role}

Task:
${task}

Context:
${context}

Constraints:
${constraints}

Output Format:
${format}`;

    // Display generated prompt
    document.getElementById("output").textContent = prompt;

    // Show message
    document.getElementById("message").textContent =
        "Prompt generated successfully!";
}


// Copy Prompt Function
async function copyPrompt() {

    let prompt = document.getElementById("output").textContent;

    if (!prompt || prompt.includes("Your prompt will appear here")) {
        alert("Please generate a prompt first!");
        return;
    }

    try {
        await navigator.clipboard.writeText(prompt);

        document.getElementById("message").textContent =
            "Prompt copied successfully!";

    } catch (error) {
        document.getElementById("message").textContent =
            "Copy failed. Please select and copy the prompt manually.";
    }
}


// Clear All Function
function clearAll() {

    document.getElementById("role").value = "";
    document.getElementById("task").value = "";
    document.getElementById("context").value = "";
    document.getElementById("constraints").value = "";
    document.getElementById("format").value = "";

    document.getElementById("output").textContent =
        "Your prompt will appear here...";

    document.getElementById("output").classList.add("placeholder");

    document.getElementById("message").textContent = "";
}


// Sample Prompt Function
function loadSample() {

    document.getElementById("role").value =
        "Act as a friendly computer science teacher";

    document.getElementById("task").value =
        "Explain Artificial Intelligence";

    document.getElementById("context").value =
        "I am a first-year college student with no previous knowledge of AI";

    document.getElementById("constraints").value =
        "Use simple English, explain in 3 bullet points, and give one real-life example";

    document.getElementById("format").value =
        "Bullet Points";

    document.getElementById("message").textContent =
        "Sample prompt loaded! Click Generate Prompt.";
}
