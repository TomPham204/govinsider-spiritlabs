import { rest } from 'msw';
import * as data from './subset.data.json';

let articles = data.default;
export const handlers = [
  // Handles a GET LIST /articles request
  rest.get('/api/articles', async (req, res, ctx) => {
    const search = new URLSearchParams(req.url.search);
    const skip = search.get('skip') || 0;
    const limit = search.get('limit') || 20;
    const returnList = articles.filter(
      (_, index) => index >= +skip && index < +skip + +limit,
    );

    await wait(1000);
    return res(ctx.status(200), ctx.json(returnList));
  }),

  // Handles a GET  /article by id
  rest.get('/api/article', async (req, res, ctx) => {
    const search = new URLSearchParams(req.url.search);
    const id = search.get('id');
    let article = articles.find((item) => item.ID === +id);

    if (!article)
      return res(
        ctx.status(400),
        ctx.json({ message: 'Record does not exist' }),
      );

    await wait(1000);
    return res(ctx.status(200), ctx.json(article));
  }),

  // Handles a PUT /article by id
  rest.put('/api/article', async (req, res, ctx) => {
    let newArticle = req.body;
    let article = articles.find((item) => item.ID === +newArticle.ID);
    if (!article)
      return res(
        ctx.status(400),
        ctx.json({ message: 'Record does not exist' }),
      );

    newArticle = { ...article, ...newArticle };
    articles.forEach((item, index) => {
      if (item.ID === article.ID) {
        articles[index] = newArticle;
      }
    });

    await wait(1000);
    return res(ctx.status(200), ctx.json(newArticle));
  }),

  // Handles a POST /article
  rest.post('/api/article', async (req, res, ctx) => {
    const newArticle = req.body;
    newArticle['ID'] = Date.now();
    articles.unshift(newArticle);
    await wait(1000);
    return res(ctx.status(200), ctx.json(newArticle));
  }),

  // Handles get profile
  rest.get('/api/profile', async (req, res, ctx) => {
    await wait(1000);
    return res(ctx.status(200), ctx.json(profile));
  }),

  rest.put('/api/profile', async (req, res, ctx) => {
    Object.assign(profile, req.body);
    await wait(1000);
    return res(ctx.status(200), ctx.json(profile));
  }),
];

function wait(timeToWait) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, timeToWait + Math.random() * 1000),
  );
}

const profile = {
  firstName: 'Test First Name',
  lastName: 'Test last name',
  birthday: '2022 Jul 06',
  gender: 'female',
  twitter: 'twitter.com',
  linkedin: 'linkedin.com',
  companyName: 'Spiritlabs',
  jobTitle: 'Developer',
  jobDescription: 'Ngồi chơi review code',
};
