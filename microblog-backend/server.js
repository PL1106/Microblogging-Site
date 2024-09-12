import express from 'express';
import postRoutes from './routes/postsRoutes.js'; // Ensure path is correct
import { initializeDb } from './initDb.js'; // Ensure path is correct

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize the database
initializeDb().then(() => {
  // Middleware to parse JSON bodies
  app.use(express.json());

  // Use routes
  app.use('/api/posts', postRoutes);

  // Handle 404 - Not Found
  app.use((req, res) => {
    res.status(404).send('<h1>Not found</h1>');
  });

  // General error handler (optional)
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('<h1>Something went wrong</h1>');
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to start server:', error);
});
