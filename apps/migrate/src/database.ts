import mysql from 'mysql2';
import pg from 'pg';
import util from 'util';

const pgCLient = new pg.Client({
  user: 'vanminhcutenhatvutru',
  password: 'vanminhcutenhatvutru',
  port: 6805,
  database: 'vanminhcutenhatvutru',
  host: 'master.spiritlabs.co',
});

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pw',
  database: 'wp_govinsider',
  port: 3310,
});

const mysqlConnect = util
  .promisify(mysqlConnection.connect)
  .bind(mysqlConnection);

const mysqlQuery = util.promisify(mysqlConnection.query).bind(mysqlConnection);

const waitConnectionToDB = async () => {
  try {
    await mysqlConnect();
    await pgCLient.connect();
    console.log('DATABASE CONNECT SUCCESSFUL.');
  } catch (error) {
    console.log('DATABASE CONNECT ERROR: ', error);
  }
};

export { pgCLient, mysqlConnection, waitConnectionToDB, mysqlQuery };
