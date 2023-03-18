import * as openai from 'openai';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

const config = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const api = new openai.OpenAIApi(config);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/evaluate-conversation', async (req, res) => {
  try {
    const conversation = req.body.conversation;

    // OpenAI APIを使用して会話を評価
    const response = await api.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `Please evaluate in japanese the following web chat conversation:\n\n${conversation}\n\nEvaluation: `,
        }
      ]
    });

    const evaluation = response.data.choices[0].message.content;
    res.json({ evaluation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error evaluating conversation' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

