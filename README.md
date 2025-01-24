# OpenAI API Frontend

A simple web-based frontend for interacting with OpenAI's API. This project allows users to input a message and receive a response from OpenAI's `gpt-3.5-turbo` model.

---

## Features

- **Interactive Chat Interface**: Users can type messages and get real-time AI-generated responses.
- **Simple Design**: A clean and minimalist user interface built with HTML, CSS, and JavaScript.
- **API Integration**: Direct communication with OpenAI's Chat API.

---

## Requirements

- An active OpenAI API key. [Create yours here](https://platform.openai.com/).

---

## Project Structure

```
openai-frontend/
├── index.html      # Main HTML file
├── style.css       # Styles for the frontend
└── script.js       # JavaScript for API interaction
```

---

## Setup and Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/openai-frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd openai-frontend
   ```

3. Open `index.html` in your browser to launch the app.

4. Replace `YOUR_API_KEY` in `script.js` with your OpenAI API key:
   ```javascript
   Authorization: `Bearer YOUR_API_KEY`
   ```

5. Start typing messages in the text area and press "Send" to see responses.

---

## Notes

- **Security**: Avoid exposing your API key in public repositories. Use a backend to proxy requests if deploying this project.
- **Limits**: This project may hit usage limits based on your OpenAI plan. Check your usage [here](https://platform.openai.com/account/usage).

---

## Future Enhancements

- Add a backend for secure API key handling.
- Include a chat history feature.
- Improve styling and user experience.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

