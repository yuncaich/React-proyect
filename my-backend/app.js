// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRoutes = require('./routes/registerRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3001' // Reemplaza con el origen de tu aplicación React
}));

app.use(bodyParser.json());
app.use('/api', registerRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
