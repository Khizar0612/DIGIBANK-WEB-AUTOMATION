// const mysql = require('mysql2/promise');

// const connectionConfig = {
//   host: '192.168.0.196:3306',
//   user: 'root',
//   password: 'mysecretpassword',
//   database: 'digibank',
// };

// async function queryDatabase(query) {
//   const connection = await mysql.createConnection(connectionConfig);
//   const [results, ] = await connection.execute(query);
//   await connection.end();
//   return results;
// }

// module.exports = { queryDatabase };

// import { queryDatabase } from '../../db';

// Cypress.Commands.add('fetchDataFromDatabase', (query) => {
//   return queryDatabase(query);
// });

