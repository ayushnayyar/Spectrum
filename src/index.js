const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

const port = process.env.PORT || 3000;

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log('Connected to DB')
);

app.listen(app.get('port'), () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
