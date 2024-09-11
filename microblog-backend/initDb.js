import dbPromise from './database.js';

export const initializeDb = async () => {
  try {
    const db = await dbPromise;

    await db.exec(`
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        author TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('Database initialized');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
};
