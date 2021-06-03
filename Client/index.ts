// import * as  from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = "hello world!"

    return element;
}

document.body.appendChild(component())