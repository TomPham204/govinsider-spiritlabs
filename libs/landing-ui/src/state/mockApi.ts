import { useLoaderData } from '@remix-run/react';
import Axios from '_@landing-ui/config/Axios';

type GetArticlesParams = {
  limit?: number;
  skip?: number;
};

export type Article = {
  ID?: string | number;
  post_author?: string | number;
  post_date?: string;
  post_date_gmt?: string;
  post_content?: string;
  post_title?: string;
  post_excerpt?: string;
  post_status?: string;
  comment_status?: string;
  ping_status?: string;
  post_password?: string;
  post_name?: string;
  to_ping?: string;
  pinged?: string;
  post_modified?: string;
  post_modified_gmt?: string;
  post_content_filtered?: string;
  post_parent?: string | number;
  guid?: string;
  menu_order?: string | number;
  post_type?: string;
  post_mime_type?: string;
  comment_count?: string | number;
};

export async function getArticles({
  limit = 0,
  skip = 0,
}: GetArticlesParams = {}) {
  return await Axios.get(`/articles?limit=${limit}&skip=${skip}`);
}

export async function getArticleById(id: string | number) {
  return await Axios.get(`/article?id=${id}`);
}

export async function updateArticleById(body: Article) {
  return await Axios.put('/article', body);
}

export async function createArticle(body: Omit<Article, 'ID'>) {
  return await Axios.post('/article', body);
}

export async function getProfile() {
  return await Axios.get('/profile');
}

export async function updateProfile(body: any) {
  return await Axios.put('/profile', body);
}
