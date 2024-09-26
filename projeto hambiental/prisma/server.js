
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Rota para salvar dados do formulário
app.post('/api/contato', async (req, res) => {
  const { nome, email, whatsapp } = req.body;

  try {
    const contato = await prisma.contato.create({
      data: {
        nome,
        email,
        whatsapp,
      },
    });
    res.status(201).json(contato);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar contato' });
  }
  
});

// Iniciar o servidor
app.listen(5555, () => {
  console.log('Servidor rodando na porta 5555');
});
