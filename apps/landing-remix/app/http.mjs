import { createServer } from 'http';
import { createHash } from 'crypto';

function md5(str) {
  return createHash('md5').update(str).digest('hex');
}

let server = createServer((req, res) => {
  switch (req.url) {
    case '/': {
      let html = createPage('Home');
      let etag = md5(html);
      console.log('refetch');
      if (etag === req.headers['if-none-match']) {
        res.writeHead(304, {
          'cache-control': 'max-age=10, must-revalidate',
          etag,
        });
        res.end();
      } else {
        res.writeHead(200, {
          'cache-control': 'max-age=0, must-revalidate',
          etag,
        });
        res.end(html);
      }
      break;
    }
    case '/page-1': {
      let html = createPage('Page 1');
      // res.writeHead(200, {
      //   'cache-control': 'max-age=10, must-revalidate',
      // });
      res.end(html);
      break;
    }
  }
});

server.listen(3001);

function createPage(title) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <ul>

      <li><a href="/">Home</a></li>
      <li><a href="/page-1">Page 1</a></li>
    </ul>
    <h1>Hello World: This is ${title}</h1>
    ${Array.from({ length: 1000 })
      .map(() => '<div>Just be here for nothing</div>')
      .join('\n')}
  </body>
  </html>
  `;
}
