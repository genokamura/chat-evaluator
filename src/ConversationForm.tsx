import React, { useState } from 'react';

interface ConversationFormProps {
  onSubmit: (conversation: string) => void;
}

const ConversationForm: React.FC<ConversationFormProps> = ({ onSubmit }) => {
  const [conversation, setConversation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(conversation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={conversation}
        onChange={(e) => setConversation(e.target.value)}
        rows={10}
        cols={50}
        placeholder="Enter Web Chat conversation here"
      />
      <br />
      <button type="submit">Evaluate</button>
    </form>
  );
};

export default ConversationForm;
