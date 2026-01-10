



// ---- Imports ----
import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

// ---- process-level safety net ----
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

server.on('error', (err) => {
  console.error('HTTP SERVER ERROR');
  console.error(err);
  process.exit(1);
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));






