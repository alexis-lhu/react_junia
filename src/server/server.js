const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Pour permettre les requêtes CORS

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Autorise les requêtes depuis le frontend
app.use(express.json()); // Parse les requêtes JSON

// Clé API Hugging Face
const API_TOKEN = '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';
const model = 'deepset/roberta-base-squad2'; 

// Route pour gérer les messages envoyés par le frontend
app.post('/chat', async (req, res) => {
   userMessage = req.body.message;
  console.log('Message reçu:', userMessage); // Debug pour voir les messages reçus

  try {
    // Appel à l'API de Hugging Face
     apiResponse = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      { inputs: userMessage },
      { headers: { Authorization: `Bearer ${API_TOKEN}` } }
    );

    const botResponse = apiResponse.data;
    console.log('Réponse du bot:', botResponse); // Debug pour vérifier la réponse

    res.json({ response: botResponse });
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'API Hugging Face:', error.message);
    res.status(500).json({ error: 'Erreur de serveur ou problème avec l\'API Hugging Face' });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend en écoute sur http://localhost:${port}`);
});
