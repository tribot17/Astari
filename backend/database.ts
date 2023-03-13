import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database/database.db");

const postAddressCharacter = async (
  address: string,
  character_specs: string
) => {
  db.run(
    "INSERT INTO users (address, character_specs) VALUES (?, ?) ON CONFLICT (address) DO UPDATE SET character_specs = ?",
    [address, character_specs, character_specs]
  );
};

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (address TEXT UNIQUE, character_specs OBJECT)"
  );

  // const stmt = db.prepare("INSERT INTO users (name) VALUES (?)");

  // stmt.run("Alice");
  // stmt.run("Bob");
  // stmt.run("Charlie");

  // stmt.finalize();

  postAddressCharacter("0x", JSON.stringify({ name: "salut" }));

  db.each("SELECT address, character_specs FROM users", (err, row) => {
    console.log(`${row.address}: ${row.character_specs}`);
    console.log(JSON.parse(row.character_specs));
  });
});

db.close();
