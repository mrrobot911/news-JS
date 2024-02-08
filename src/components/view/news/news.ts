import { Article } from '../../models/index.model';
import './news.css';

class News {
  draw(data: Array<Article>) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

    news.forEach((item, idx) => {
      if (newsItemTemp) {
        const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

        if (idx % 2) {
          const newsItem = newsClone.querySelector('.news__item');
          if (newsItem) {
            newsItem.classList.add('alt');
          }
        }
        const newsPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
        if (newsPhoto) newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
        const newsAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
        if (newsAuthor) newsAuthor.textContent = item.author || item.source.name;
        const newsDate = newsClone.querySelector('.news__meta-date');
        if (newsDate) newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

        const newsTitle = newsClone.querySelector('.news__description-title');
        if (newsTitle) newsTitle.textContent = item.title;
        const newsSource = newsClone.querySelector('.news__description-source');
        if (newsSource) newsSource.textContent = item.source.name;
        const newsContent = newsClone.querySelector('.news__description-content');
        if (newsContent) newsContent.textContent = item.description;
        const userRead = newsClone.querySelector('.news__read-more a');
        if (userRead) userRead.setAttribute('href', item.url);

        fragment.append(newsClone);
      }
    });
    const newsElement: HTMLElement | null = document.querySelector('.news');
    if (newsElement) {
      newsElement.innerHTML = '';
      newsElement.appendChild(fragment);
    }
  }
}

export default News;
