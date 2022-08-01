import format from 'pg-format';
import { pgCLient, waitConnectionToDB, mysqlQuery } from './database';

(async () => {
  await waitConnectionToDB();

  let offset = 0;
  const LIMIT = 1000;

  const totalCount = await mysqlQuery('SELECT count(*) as count FROM wp_users');

  try {
    while (offset < totalCount[0].count) {
      const rows = await mysqlQuery(
        `SELECT * FROM wp_users ORDER BY ID ASC limit ${LIMIT} offset ${offset}`,
      );

      const users = rows.map((item) => {
        const {
          ID,
          user_email,
          user_pass,
          display_name,
          user_activation_key,
          user_registered,
        } = item;
        return [
          ID,
          user_email,
          user_pass,
          display_name,
          user_activation_key,
          user_registered,
          user_registered,
        ];
      });
      const sql = format(
        `INSERT INTO "User" (id, email, password, "firstName", "activationKey",  "createdAt", "updatedAt") VALUES %L ON CONFLICT (id) DO NOTHING`,
        users,
      );
      await pgCLient.query(sql);
      offset += LIMIT;
    }
    console.log('MIGRATE USER DONE.');
    process.exit();
  } catch (error) {
    console.log(error);
  }
})();
