import { Source } from '../../models/index.model';
import './sources.css';

class Sources {
  private filter: string = 'A';
  draw(data: Array<Source>) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    const drawData = () => {
      data
        .filter((el) => el.name.startsWith(this.filter))
        .forEach((item) => {
          if (!sourceItemTemp) {
            return;
          }
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

    const filterContainer = document.createElement('div');
    letters.forEach((letter) => {
      const btn = document.createElement('button');
      btn.textContent = letter;
      btn.addEventListener('click', () => {
        this.filter = letter;
        drawData();
      });
      filterContainer.append(btn);
    });

    drawData();
    const filters = document.querySelector('.filters');
    if (filters?.childElementCount === 0) filters?.append(filterContainer);
  }
}

export default Sources;
