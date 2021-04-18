const express = require('express');
const PORT = process.env.PORT || 5000;

const jumboMailRoutes = require('./routes/jumbuMailRoutes');

const app = express();

app.use('/jumbo', jumboMailRoutes);

app.listen(PORT);