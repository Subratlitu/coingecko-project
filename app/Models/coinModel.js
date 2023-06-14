const mysql = require('mysql');
const Config = use('Config');

// Create a MySQL connection pool
const pool = mysql.createPool(Config.get('database.mysql.connection'));

class CoinRepository {
  static insertCoin(coin) {
    // Convert platforms to a JSON string
    coin.platforms = JSON.stringify(coin.platforms);

    return new Promise((resolve, reject) => {
      pool.getConnection((error, connection) => {
        if (error) {
          reject(error);
          return;
        }

        connection.query('INSERT INTO coingecko_data SET ?', coin, (error, results) => {
          connection.release();

          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    });
  }
}

module.exports = CoinRepository;
