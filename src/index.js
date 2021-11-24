import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import 'dotenv/config';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log('Connected to DB')
);

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
