const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());
app.use(cors());

// ✅ Your OpenRouter API Key (Keep this private!)
const apiKey = process.env.OPENROUTER_API_KEY;


// ✅ Model to use
const model = 'openai/gpt-3.5-turbo';

// ✅ Generate Algorithm API
app.post('/generate-algorithm', async (req, res) => {
  const { sentence } = req.body;

  if (!sentence) {
    return res.status(400).json({ error: 'Missing sentence in request body' });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model,
        messages: [
          {
            role: 'system',
            content: 'You are an expert programmer who generates code and algorithms from natural language descriptions.',
          },
          {
            role: 'user',
            content: `Write JavaScript code for this: ${sentence}`,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'Human Algorithm Generator',
        },
      }
    );

    const generatedCode = response.data.choices[0].message.content;
    res.json({ generatedCode });
  } catch (error) {
    console.error('OpenRouter API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate code' });
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
