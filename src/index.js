import './index.css';
import './index.less';
import { aaa } from './common';

const element = document.createElement('div');

element.innerHTML = 'hello world';
element.classList.add('red');
element.classList.add('yellow');
aaa();

console.log(process.env.NODE_ENV);

document.body.append(element);