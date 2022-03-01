// imnpport _ from 'lodash';
import getData from './modules/generateLeaders.js';
import formData from './modules/forms.js';
import './style.css';

document.querySelector('.Add').addEventListener('click', formData);
getData();
document.querySelector('#refresh-btn').addEventListener('click', () => window.location.reload());