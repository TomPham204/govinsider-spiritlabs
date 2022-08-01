import format from 'pg-format';
import { pgCLient, waitConnectionToDB, mysqlQuery } from './database';

(async () => {
  await waitConnectionToDB();

  let offset = 0;
  const LIMIT = 1000;

  // check if post_meta is existed
  const data = await pgCLient.query('SELECT * from "PostMeta" limit 1');
  if (data.rows.length) return console.log('MIGRATE EXISTED.');

  const totalCount = await mysqlQuery(
    "SELECT count(*) as total FROM wp_postmeta WHERE meta_key='_yoast_wpseo_primary_category' AND meta_value<>''",
  );
  try {
    while (offset < totalCount[0].total) {
      const rows = await mysqlQuery(
        `SELECT * FROM wp_postmeta WHERE meta_key='_yoast_wpseo_primary_category' AND meta_value<>'' LIMIT ${LIMIT} OFFSET ${offset}`,
      );
      const meta = rows.map((item) => {
        const { post_id, meta_value } = item;
        return [post_id, +meta_value];
      });

      if (meta.length) {
        const sql = format(
          `INSERT INTO "PostMeta" ("postId", "categoryId") VALUES %L ON CONFLICT (id) DO NOTHING`,
          meta,
        );
        await pgCLient.query(sql);
      }
      offset += LIMIT;
    }
    console.log('MIGRATE POST DONE.');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
})();
