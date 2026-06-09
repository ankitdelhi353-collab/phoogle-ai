async function searchAI() {
  const query = document.getElementById("query").value;
  const result = document.getElementById("result");

  if (!query) {
    result.innerHTML = "Please enter a question.";
    return;
  }

  result.innerHTML = "Thinking...";

  const API_KEY = "YAHAN_APNI_GEMINI_API_KEY_DALNA";

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: query
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    result.innerHTML =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response received.";
  } catch (error) {
    result.innerHTML = "Error: " + error.message;
  }
}
