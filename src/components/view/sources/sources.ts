import { Source } from '../../models/index.model';
import './sources.css';

class Sources {
  private filter: string = 'A';
  draw(data: Array<Source>) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
    const filters = document.querySelector('.filters');

    const drawData = () => {
      if (!sourceItemTemp) {
        return;
      }
      data
        .filter((el) => el.name.startsWith(this.filter))
        .forEach((item) => {
          const sourceClone = sourceItemTemp.content.cloneNode(true);
          if (sourceClone instanceof DocumentFragment) {
            const sourceName = sourceClone.querySelector('.source__item-name');
            if (sourceName) sourceName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
          }
        });

      const sources = document.querySelector('.sources');
      if (sources) sources.replaceChildren(fragment);
    };

    if (filters?.childElementCount !== 0) {
      return;
    }
    letters.forEach((letter) => {
      const btn = document.createElement('button');
      btn.textContent = letter;
      btn.className = 'source__item';
      if (letter === this.filter) {
        btn.className = 'source__item checked';
      }
      btn.addEventListener('click', () => {
        this.filter = letter;
        document.querySelectorAll('button').forEach((el) => {
          if (el.textContent === this.filter) {
            el.className = 'source__item checked';
          } else {
            el.className = 'source__item';
          }
        });
        drawData();
      });
      filters?.append(btn);
    });

    drawData();
  }
}

export default Sources;
