import sqlite3 from 'sqlite3';

const dbConnect = () => {
  const db = new sqlite3.Database('../db/my-database.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
  });

  return db;
};

export default dbConnect;
