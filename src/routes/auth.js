const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
import { login } from '../controllers/auth';

server.post('/api/v1/auth/google', login);
