import format from 'pg-format';
import { pgCLient, mysqlQuery, waitConnectionToDB } from './database';

(async () => {
  await waitConnectionToDB();

  let offset = 0;
  const LIMIT = 1000;

  const totalCount = await mysqlQuery(
    `SELECT count(*) as count FROM wp_posts WHERE post_type='post' AND post_name <>''`,
  );
  console.log('totalCount', totalCount[0].count);
  try {
    while (offset < totalCount[0].count) {
      const rows = await mysqlQuery(
        `SELECT * FROM wp_posts WHERE post_type='post' AND post_name <>'' ORDER BY ID ASC limit ${LIMIT} offset ${offset}`,
      );
      const formatRows = rows.map((item) => {
        const {
          ID,
          post_author,
          post_date,
          post_title,
          post_name,
          post_content,
          post_status,
          post_type,
          post_modified,
        } = item;
        return [
          ID,
          post_title,
          post_name,
          post_content,
          post_status,
          post_type,
          post_author,
          post_date,
          post_modified,
        ];
      });
      const sql = format(
        `INSERT INTO "Post" (id, name, slug, content, status, type, "userId",  "createdAt", "updatedAt") VALUES %L ON CONFLICT (id) DO NOTHING`,
        formatRows,
      );
      await pgCLient.query(sql);
      offset += LIMIT;
    }
    console.log('MIGRATE POST DONE.');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
})();
