import './index.less';

const element = document.createElement('div');

element.innerHTML = 'hello world';
element.classList.add('red');
element.classList.add('yellow');

setTimeout(() => {
    import(/* webpackChunkName: "print" */'./common').then(module => {
        module.aaa();
    });
}, 5000);

document.body.append(element);