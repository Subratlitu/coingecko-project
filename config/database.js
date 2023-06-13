const Env = use('Env');

module.exports = {
  connection: Env.get('DB_CONNECTION', 'sqlite'),
  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', ''),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', ''),
    },
  },
};
