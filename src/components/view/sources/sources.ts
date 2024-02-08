import { Source } from '../../models/index.model';
import './sources.css';

class Sources {
  draw(data: Array<Source>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      if (sourceItemTemp) {
        const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

        const sourceName = sourceClone.querySelector('.source__item-name');
        if (sourceName) sourceName.textContent = item.name;
        const sourceItem = sourceClone.querySelector('.source__item');
        if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

        fragment.append(sourceClone);
      }
    });

    const sources = document.querySelector('.sources');
    if (sources) sources.append(fragment);
  }
}

export default Sources;
