const sendButton = document.getElementById("send");
const inputField = document.getElementById("input");
const responseDiv = document.getElementById("response");

sendButton.addEventListener("click", async () => {
  const prompt = inputField.value;
  if (!prompt) {
    alert("Por favor, escribe algo antes de enviar.");
    return;
  }

  responseDiv.textContent = "Cargando...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_API_KEY`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100
      })
    });

    if (!response.ok) {
      throw new Error("Error al comunicarse con la API");
    }

    const data = await response.json();
    responseDiv.textContent = data.choices[0].message.content;
  } catch (error) {
    responseDiv.textContent = `Error: ${error.message}`;
  }
});
