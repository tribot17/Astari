const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/database.db", (err: any) => {
  if (err) {
    console.log("error database", err);
  }
});

export const sendAddressCharacter = async (
  address: string,
  character_specs: string
) => {
  // const stmt = db.prepare(
  //   "INSERT INTO users (address, character_specs) VALUES (?, ?) ON CONFLICT(address) DO UPDATE SET character_specs = ?"
  // );
  // stmt.run([address, character_specs, character_specs]);
  // stmt.finalize();
  db.run(
    "INSERT INTO users (address, character_specs) VALUES (?, ?) ON CONFLICT(address) DO UPDATE SET character_specs = ?",
    [address, character_specs, character_specs],
    (err: any) => {
      if (err) console.error(err.message);
      else console.log("addded");
    }
  );
};

export const postAddressCharacter = async (address: string, specs: object) => {
  db.serialize(() => {
    db.run(
      "CREATE TABLE IF NOT EXISTS users (address TEXT UNIQUE, character_specs OBJECT)"
    );
    sendAddressCharacter(address, JSON.stringify(specs));
  });
  db.close();
};

export const getAllUsers = () => {
  return new Promise((resolve: any, reject: any) => {
    db.all("SELECT * FROM users", [], (err: any, rows: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
      db.close();
    });
  });
};

export const getUser = async (address: string) => {
  const db2 = new sqlite3.Database("./database/database.db", (err: any) => {
    if (err) {
      console.log("error database", err);
    }
  });

  return new Promise((resolve: any, reject: any) => {
    db2.get(
      "SELECT * FROM users WHERE address = ?",
      [address],
      (err: any, row: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
        db2.close();
      }
    );
  });
};
