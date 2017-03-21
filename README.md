# babel-runtime bug reproduction

`babel-runtime` transform plugin seems to currently leak global behavior when certain conditions are met.

The error seems to happen only when `prototype.js` version <= 1.7.2 is loaded.

This repo reproduces the error by doing:

1. `npm install`
2. `npm run build`
3. `open index.html`
4. check the console, you'll see "[object Array Iterator]"

When this behavior changes, it actually conflicts with Google tag manager internals and can break websites.

# reproduce on the web

The problem seems to go away with prototype.js version 1.7.3
But version 1.7.0 seems to be currently used by Magento websites.

So The same error can be reproduced by:
1. go to https://marketplace.magento.com/ (or some other website written with magento)
2. paste `bundle.js` in the console
3. run `Object.prototype.toString.call([])`
