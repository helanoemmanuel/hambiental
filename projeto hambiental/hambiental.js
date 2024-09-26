function goToPage(url) {
    window.location.href = url;
};





// Backend Express com Prisma
const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client'); // Import Prisma Client
const prisma = new PrismaClient();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/contato', async (req, res) => {
  const { nome, email, whatsapp } = req.body;

  try {
    const contato = await prisma.contato.create({
      data: { nome, email, whatsapp },
    });

    res.status(201).json(contato);
  } catch (error) {
    console.error('Erro ao salvar contato:', error);
    res.status(500).json({ error: 'Erro ao salvar contato' });
  }
});

app.listen(5555, () => {
  console.log('Servidor rodando na porta 5555');
});


