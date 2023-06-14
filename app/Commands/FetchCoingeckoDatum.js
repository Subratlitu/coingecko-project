'use strict'

const { Command } = require('@adonisjs/ace')
const axios = require('axios');
const CoinRepository = require("../Models/coinModel")
class FetchCoingeckoDatum extends Command {
  static get signature () {
    return 'fetch:coingecko:datum'
  }

  static get description () {
    return 'Tell something helpful about this commands'
  }

  async handle() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true');

       const coins = response.data;
       for (const coin of coins) {
        await CoinRepository.insertCoin(coin);
      }
       
       this.success('Coingecko data fetched and stored successfully!');
    } catch (error) {
      this.error('Failed to fetch and store Coingecko data:', error);
    }
  }
}

module.exports = FetchCoingeckoDatum
