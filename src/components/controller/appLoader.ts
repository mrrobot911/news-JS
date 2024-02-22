import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://proxi-add-cors.vercel.app/?url=https://newsapi.org/v2/', {
      apiKey: '40db993a2f4144668d0904a64855aaaa',
    });
  }
}

export default AppLoader;
