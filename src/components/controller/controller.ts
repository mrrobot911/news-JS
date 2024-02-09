import { ResponceModelAll, ResponceModelSources } from '../models/index.model';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: (data: ResponceModelSources | ResponceModelAll) => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: MouseEvent, callback: (data: ResponceModelSources | ResponceModelAll) => void) {
    let target: HTMLDivElement | null = e.target instanceof HTMLDivElement ? e.target : null;
    const newsContainer: HTMLElement | null = e.currentTarget instanceof HTMLElement ? e.currentTarget : null;

    while (target !== newsContainer) {
      if (target !== null && target.classList.contains('source__item')) {
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
