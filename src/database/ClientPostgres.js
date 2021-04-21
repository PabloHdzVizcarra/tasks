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
  }

  static async insert(data) {
    const query = `
    INSERT INTO task(task_name, state)
    VALUES ('${data.text}', '${data.state}')
    `;

    this.client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Data insert successful");
    });
  }

  static async getAll() {
    const query = `
      SELECT * FROM task;
    `;

    try {
      const result = await this.client.query(query);
      return result.rows;
    } catch (error) {
      console.error(error.stack);
    }
  }

  static async update(task_state, task_name) {
    const query = `
      UPDATE task
      SET state = ${task_state}
      WHERE task_name = '${task_name}'
    `;

    try {
      const result = await this.client.query(query);
      return result;
    } catch (error) {
      console.error(error.stack);
    }
  }

  static async delete(task_name) {
    const query = `
      DELETE FROM task
      WHERE task_name = '${task_name}'
    `;

    try {
      const result = await this.client.query(query);
      return result;
    } catch (error) {
      console.error(error.stack);
    }
  }
}

module.exports = ClientPostgreSQL;
