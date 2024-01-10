import dbConnect from '../../src/lib/dbConnect';

export default async function handler(req, res) {
  const db = dbConnect();
  
  // Votre logique de base de données ici, par exemple :
  db.all('SELECT * FROM myTable', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.status(200).json(rows);
  });

  db.close();
}
