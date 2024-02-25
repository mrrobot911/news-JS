import { ResponceModelAll, ResponceModelSources } from '../models/index.model';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  private news = new News();
  private sources = new Sources();
  constructor() {}

  drawNews(data: ResponceModelSources | ResponceModelAll) {
    if ('articles' in data) {
      const values = data?.articles ?? [];
      this.news.draw(values);
    }
  }

  drawSources(data: ResponceModelSources | ResponceModelAll) {
    if ('sources' in data) {
      const values = data?.sources ?? [];
      this.sources.draw(values);
    }
  }
}

export default AppView;
