// imnpport _ from 'lodash';
import {getAPIData} from './modules/leaders';
import formData from './modules/forms.js';
import './style.css';

document.querySelector('.Add').addEventListener('click', formData);
getAPIData();
document.querySelector('#refresh-btn').addEventListener('click', getAPIData);