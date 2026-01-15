

// ---- Imports ----
import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv"
import clickRoutes from './routes/repoSubmissionRoute.js';

// ---- Load Enviroment Variables ----
dotenv.config();

// ---- Process Safety Net ----
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION');
  console.error(err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED PROMISE REJECTION');
  console.error(reason);
});

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

// --- Serve Static Files ----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../public')));

// ---- Start Server ----
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('HTTP SERVER ERROR');
  console.error(err);
  process.exit(1);
});

app.use(express.json());

// ---- Routes ----
app.use(clickRoutes);


app.post('/click', (req, res) => {
  console.log('Button clicked:', req.body);

  res.json({ ok: true });
});









