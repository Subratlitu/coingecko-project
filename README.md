# Adonis Coingecko Project
This project fetches data from the Coingecko API and stores it in a MySQL database.

# Setup
Install dependencies by running the following command:
npm install

# Configure the MySQL database connection in the .env file.

DB_CONNECTION=mysql
DB_HOST=your_host
DB_PORT=your_port
DB_USER=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database

# Run the database migrations to set up the necessary tables:
adonis migration:run

# Usage
To fetch data from the Coingecko API and store it in the MySQL database, run the following command:

adonis fetch:coingecko-data


This command will fetch the data from the Coingecko API and insert it into the coingecko_data table in the MySQL database.

Make sure your MySQL server is running and the database connection configuration in the .env file is correct.

