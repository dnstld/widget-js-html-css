# widget-js-html-css
# widget-js-html-css

JavaScript widget with HTML and CSS.

## Application structure

```
dev
-- index.html
src
-- index.js
```

## Usage

In order to embed the widget add the following snippet at any location on the hosting page.
```html
<script>
  (function (w,d,s,o,f,js,fjs) {
      w['JS-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'mw', './widget.js'));
  mw('init');
</script>
```

You can pass additional configurations to widget like so:

```
mw('init', { someConfiguration: 123 });
```

## Tutorial

- Creating entry point file `src/index.js`

Commit: [7ee11f078aaeeca9882b04189eb1fbac86def5fe](https://github.com/dnstld/widget-js-html-css/commit/7ee11f078aaeeca9882b04189eb1fbac86def5fe)

- Creating demo/dev page `dev/index.html`

Commit: [d5b9b03702791ffb1fb04f95dee4337d243eab3b](https://github.com/dnstld/widget-js-html-css/commit/d5b9b03702791ffb1fb04f95dee4337d243eab3b)

- Creating `webpack.config.js` to build and run

Commit: [645cb6303cd18057446eaa78a87fbd0bcd335877](https://github.com/dnstld/widget-js-html-css/commit/645cb6303cd18057446eaa78a87fbd0bcd335877)

```
yarn add webpack webpack-cli webpack-dev-server copy-webpack-plugin -D
```

To serve it:
```
yarn dev
```

To build it:
```
yarn build
```

- Adding Babel as module to WebPack (IE6)

Commit: [f222b10a1fee1d9f80791dfd1affc2dfff4f5c66](https://github.com/dnstld/widget-js-html-css/commit/f222b10a1fee1d9f80791dfd1affc2dfff4f5c66)

```
yarn add @babel/core @babel/preset-env babel-loader@next core-js -D
```

## Develop

To get started:
```
yarn install
yarn dev
```
This will open the browser with "demo" page which hosts the widget.

