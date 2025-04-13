document.getElementById("generateBtn").addEventListener("click", async () => {
  const description = document.getElementById("algorithmDescription").value.trim();
  if (!description) {
    alert("Please enter an algorithm description.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/generate-algorithm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sentence: description }) // ✅ Fixed key
    });

    const data = await response.json();
    const code = data.generatedCode; // ✅ use `generatedCode` to match backend

    // Show generated code
    document.getElementById("generatedCode").textContent = code;

    // Preview code
    const preview = document.getElementById("previewArea");
    preview.innerHTML = "";
    const script = document.createElement("script");
    script.textContent = code;
    preview.appendChild(script);
  } catch (error) {
    console.error("Generation error:", error);
    alert("Failed to generate code.");
  }
});
