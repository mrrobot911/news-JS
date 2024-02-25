import { ResponceModelAll, ResponceModelSources } from '../models/index.model';
import AppLoader from './appLoader';

interface Callback {
  (data: ResponceModelSources | ResponceModelAll): void;
}
class AppController extends AppLoader {
  getSources(callback: Callback) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: Callback) {
    let target: HTMLDivElement | null = e.target instanceof HTMLDivElement ? e.target : null;
    const newsContainer: HTMLElement | null = e.currentTarget instanceof HTMLElement ? e.currentTarget : null;

    while (target !== newsContainer) {
      if (target?.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (newsContainer !== null && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId || '');

          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId || '',
              },
            },
            callback
          );
        }
        return;
      }
      target = target?.parentNode instanceof HTMLDivElement ? target.parentNode : null;
    }
  }
}

export default AppController;
