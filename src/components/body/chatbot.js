import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Fonction pour envoyer le message et obtenir la réponse du bot
  const handleSendMessage = async () => {
    if (!input) return;

    // Ajouter le message utilisateur à l'historique
    const newMessages = [...messages, { user: true, text: input }];
    setMessages(newMessages);
    setInput('');

    // Appel au backend pour obtenir la réponse du bot
    try {
      const response = await axios.post('http://localhost:5000/chat', {
        message: input, // Message de l'utilisateur envoyé au backend
      });
        console.log('Réponse du serveur backend:', response);

      // Ajouter la réponse du bot à l'historique
      setMessages([...newMessages, { user: false, text: response }]);
    } catch (error) {
      console.error('Erreur lors de l\'appel au serveur backend:', error);
      setMessages([...newMessages, { user: false, text: 'Une erreur est survenue.' }]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Envoyer avec "Entrée"
        placeholder="Posez une question..."
      />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  );
};

export default Chatbot;
