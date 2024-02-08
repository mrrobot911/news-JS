import { ResponceModelAll, ResponceModelSources } from '../models/index.model';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  private news: News;
  private sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: ResponceModelAll) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ResponceModelSources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
