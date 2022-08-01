import format from 'pg-format';
import { pgCLient, waitConnectionToDB, mysqlQuery } from './database';

(async () => {
  await waitConnectionToDB();

  let offset = 0;
  const LIMIT = 500;

  // const totalCount = await mysqlQuery("SELECT count(*) as count FROM wp_posts");
  // console.log("totalCount", totalCount[0].count);
  try {
    while (offset < 50) {
      const rows = await mysqlQuery(
        `SELECT * FROM wp_terms JOIN wp_term_taxonomy on wp_terms.term_id = wp_term_taxonomy.term_id where taxonomy='category' LIMIT ${LIMIT} OFFSET ${offset}`,
      );
      const categories = rows.map((item) => {
        const { term_id, name, slug } = item;
        return [term_id, name, slug];
      });

      if (categories.length) {
        const sql = format(
          `INSERT INTO "Category" (id, name, slug) VALUES %L ON CONFLICT (id) DO NOTHING`,
          categories,
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
