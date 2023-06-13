'use strict'

const { Command } = require('@adonisjs/ace')
const axios = require('axios');
const Database = use('Database');
const mysql = require('mysql');
const Config = use('Config');
class FetchCoingeckoDatum extends Command {
  static get signature () {
    return 'fetch:coingecko:datum'
  }

  static get description () {
    return 'Tell something helpful about this commandssssssssss'
  }

  async handle() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true');

       const coins = response.data;
         // Create a MySQL connection
  const connection = mysql.createConnection(Config.get('database.mysql.connection'));

  // Insert each coin into the database
  for (const coin of coins) {
    // Convert platforms to a JSON string
    coin.platforms = JSON.stringify(coin.platforms);
  
    await new Promise((resolve, reject) => {
      connection.query('INSERT INTO coingecko_data SET ?', coin, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  // Close the MySQL connection
  connection.end();
       
       this.success('Coingecko data fetched and stored successfully!');
    } catch (error) {
      console.log(error,">>>")
      this.error('Failed to fetch and store Coingecko data:', error);
    }
  }
}

module.exports = FetchCoingeckoDatum
