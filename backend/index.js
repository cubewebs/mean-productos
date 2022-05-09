const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Creamos servidor
const app = express();

// Conectamos a la BD
connectDB();
app.use(cors());

// Abilitar json middleware
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor esta levantado en el puerto 4000')
})