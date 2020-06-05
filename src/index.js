import './index.css';
import './index.less';
import { aaa } from './common';

const element = document.createElement('div');

element.innerHTML = 'hello worlk';
element.classList.add('red');
element.classList.add('yellow');
aaa();

document.body.append(element);