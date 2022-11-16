import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/templates/components/header';
import './views/templates/components/footer';
import './views/templates/components/jumbotron';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
 
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.toggle-button'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
