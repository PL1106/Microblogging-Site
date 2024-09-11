const express = require('express');
const db = require('./database'); // SQLite3 setup
const postRoutes = require('./routes/postRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use('/api/posts', postRoutes);

app.use((req, res) => {
  res.status(404).send('<h1>Not found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
