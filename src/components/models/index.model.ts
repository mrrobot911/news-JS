export interface Source {
  id: string;
  name: string;
  description: string;
  url: URL;
  category: string;
  language: string;
  country: string;
}
export interface ResponceModelSources {
  status: string;
  sources: Array<Source>;
}
export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id?: string | null; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
export interface ResponceModelAll {
  articles: Array<Article>;
  status: string;
  totalResults: number;
}
