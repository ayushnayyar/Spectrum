import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import 'dotenv/config';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import friendRequestRoutes from './routes/requests.js';
import peopleRoutes from './routes/people.js';
import rewardsRoutes from './routes/rewards.js';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/friendrequest', friendRequestRoutes);
app.use('/people', peopleRoutes);
app.use('/rewards', rewardsRoutes);

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
