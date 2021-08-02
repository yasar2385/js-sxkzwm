// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
var e = {
  b: {
    element: 'strong',
    attributes: {
      'data-name': 'bold',
      'data-id': s4(),
      'data-css': 'ice-format',
      'data-username': localStorage.getItem('xmleditor:username'),
      'data-userid': localStorage.getItem('xmleditor:userid'),
      'data-time': new Date().getTime() + '',
      'data-changedata': '',
      'data-last-change-time': new Date().getTime() + ''
    }
  }
};
var formatTagsImpact = {};
var formatTags_JSON = {
  b: { element: 'strong', 'data-name': 'bold' },
  i: { element: 'em', 'data-name': 'italic' },
  u: { element: 'u', 'data-name': 'underline' },
  sup: { element: 'sup', 'data-name': 'superscript' },
  sub: { element: 'sub', 'data-name': 'subscript' },
  sc: { element: 'sc', 'data-name': 'smallcaps' },
  str: { element: 's', 'data-name': 'strike' }
};
Object.entries(formatTags_JSON).forEach(([tag, json]) => {
  var tempObj = {};
  Object.entries(json).forEach(([name, value]) => {
    if (name == 'element') {
      tempObj[name] = value;
    } else {
      tempObj['attributes'] = {
        'data-name': value,
        'data-id': s4(),
        'data-css': 'ice-format',
        'data-username': localStorage.getItem('xmleditor:username'),
        'data-userid': localStorage.getItem('xmleditor:userid'),
        'data-time': new Date().getTime() + '',
        'data-changedata': '',
        'data-last-change-time': new Date().getTime() + ''
      };
    }
  });
  formatTagsImpact[tag] = tempObj;
});
console.log(formatTagsImpact);
