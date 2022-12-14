import html from './message.html';
import './message.css';

let elements = [];
let body;

export function message(income) {
  // convert plain HTML string into DOM elements
  let temporary = document.createElement('div');
  temporary.innerHTML = html;
  temporary.getElementsByClassName('js-widget-message__text')[0].textContent = income;

  // append elements to body
  body = document.getElementsByTagName('body')[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }
}