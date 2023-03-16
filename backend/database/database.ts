const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/database.db");

export const sendAddressCharacter = async (
  address: string,
  character_specs: string
) => {
  db.run(
    "INSERT INTO users (address, character_specs) VALUES (?, ?) ON CONFLICT(address) DO UPDATE SET character_specs = ?",
    [address, character_specs, character_specs],
    (err: any) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
};

export const postAddressCharacter = async (address: string, specs: object) => {
  db.serialize(() => {
    db.run(
      "CREATE TABLE IF NOT EXISTS users (address TEXT UNIQUE, character_specs OBJECT)"
    );
    sendAddressCharacter(address, JSON.stringify(specs));
    db.each(
      "SELECT address, character_specs FROM users",
      (err: any, row: any) => {
        console.log(`${row.address}: ${row.character_specs}`);
        console.log(JSON.parse(row.character_specs));
      }
    );
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
  return new Promise((resolve: any, reject: any) => {
    db.get(
      "SELECT * FROM users WHERE address = ?",
      [address],
      (err: any, row: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
        db.close();
      }
    );
  });
};

// postAddressCharacter("0x15", { name: "salut" });

// const getUser = async () => {
//   console.log(await getAllUsers());

//   // console.log(getSpecificUser("0x"));
// };
