const app = require('express')();
const port = process.env.port || 3000;

app.listen(process.env.port || 3000, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res) => {
    res.send('Maratona Full Cycle 2.0');
});
