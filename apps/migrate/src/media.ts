import format from 'pg-format';
import { pgCLient, waitConnectionToDB, mysqlQuery } from './database';

(async () => {
  await waitConnectionToDB();

  let offset = 0;
  const LIMIT = 1000;

  // const totalCount = await mysqlQuery("SELECT count(*) as count FROM wp_posts");
  // console.log("totalCount", totalCount[0].count);
  try {
    while (offset < 50) {
      const rows = await mysqlQuery(
        `SELECT * FROM wp_posts WHERE post_type='attachment' AND post_parent>0 LIMIT ${LIMIT} OFFSET ${offset}`,
      );
      const medias = rows.map((item) => {
        const { ID, post_title, post_name, post_parent, guid, post_mime_type } =
          item;
        return [ID, post_title, post_name, post_parent, guid, post_mime_type];
      });

      if (medias.length) {
        const sql = format(
          `INSERT INTO "Media" (id, name, slug, "postId", url, "mimeType") VALUES %L ON CONFLICT (id) DO NOTHING`,
          medias,
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
