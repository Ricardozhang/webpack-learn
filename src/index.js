import './index.css';
import './index.less';

const element = document.createElement('div');

element.innerHTML = 'hello worlk';
element.classList.add('red');
element.classList.add('yellow');

document.body.append(element);