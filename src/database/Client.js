const { Client } = require("pg");

class ClientPostgreSQL {
  client;

  constructor() {}

  static connect() {
    this.client = new Client({
      user: "postgres",
      host: process.env.DB_URL,
      database: "tasks",
      password: "secret",
      port: "5432",
    });

    this.client.connect().then((_) => {
      console.log("Connected to Postgres");
    });

    // this.client
    //   .query(
    //     `
    //   CREATE TABLE task (
    //     id INT PRIMARY KEY,
    //     text VARCHAR NOT NULL,
    //     state BOOLEAN
    //   );
    // `
    //   )
    //   .then(() => {
    //     console.log("table is successfully created");
    //   });
  }

  async insert(data) {
    const query = `
    INSERT INTO task (text, state)
    VALUES (${data.text}, ${data.state})
    `;

    this.client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log("Data insert successful");
        client.end();
      }
    });
  }
}

module.exports = ClientPostgreSQL;
