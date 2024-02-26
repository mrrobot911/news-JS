import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller = new AppController();
  private view = new AppView();
  constructor() {}

  start(): void {
    const sourcesElement: HTMLElement | null = document.querySelector('.sources');
    if (sourcesElement === null) {
      return console.error("Element with class 'sources' not found.");
    }
    sourcesElement.addEventListener('click', (e: Event) => {
      this.controller.getNews(e, (data) => this.view.drawNews(data));
    });
    this.controller.getSources((data) => this.view.drawSources(data));
  }
}

export default App;
