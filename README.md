# head-stenciljs

Installation:
npm or yarn 

> npm i interaktif-kompas-header@latest --save 

Add in your main.js :

import { applyPolyfills, defineCustomElements } from 'interaktif-kompas-header/loader';

Vue.config.ignoredElements = [
  'my-header'
];

applyPolyfills().then(() => {
  defineCustomElements(window);
});