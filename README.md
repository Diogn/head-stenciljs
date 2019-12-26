# Interaktif Header - StencilJS
An trial to create web component base in Stenciljs.

## Getting Started
How to use in your apps:

### Prerequisites
Thing you need, just npm or yarn (you choose)
in my case, i use NPM so:

```
npm install interaktif-kompas-header @latest --save
```
*latest used to make sure you install the lastest update.

## In your Apps
Look for your main.js or root script, if in vue you'll find main.js in the root folder of vue/cli.

### Add in your main.js :
```
import { applyPolyfills, defineCustomElements } from 'interaktif-kompas-header/loader';

Vue.config.ignoredElements = [
  'my-header', 'interaktif-home-header' // can be multiple, depends on what you want to use.
];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

```
## Call with the tag
after component registered, you call it on your main html or index file.
```
<my-header></my-header>
or 
<interaktif-home-header></interaktif-home-header>
```
