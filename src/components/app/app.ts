import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sourcesElement: HTMLElement | null = document.querySelector('.sources');
    if (sourcesElement) {
      sourcesElement.addEventListener('click', (e: MouseEvent) => {
        this.controller.getNews(e, (data) => this.view.drawNews(data));
      });
    } else {
      console.error("Element with class 'sources' not found.");
    }
    this.controller.getSources((data) => this.view.drawSources(data));
  }
}

export default App;
