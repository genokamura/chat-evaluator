import React, { useState } from 'react';
import ConversationForm from './ConversationForm';

const App: React.FC = () => {
  const [evaluation, setEvaluation] = useState<string | null>(null);

  const handleEvaluate = async (conversation: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/evaluate-conversation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conversation }),
      });

      const data = await response.json();
      setEvaluation(data.evaluation);
    } catch (error) {
      console.error(error);
      setEvaluation('Error evaluating conversation');
    }
  };

  return (
    <div>
      <h1>Web Chat Communication Evaluator</h1>
      <ConversationForm onSubmit={handleEvaluate} />
      {evaluation && (
        <div>
          <h2>Evaluation</h2>
          <p>{evaluation}</p>
        </div>
      )}
    </div>
  );
};

export default App;

