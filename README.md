# ng-tsserver
Integrate [@angular/language-service](https://www.npmjs.com/package/@angular/language-service) and [TypeScript tsserver](https://github.com/Microsoft/TypeScript/wiki/Standalone-Server-%28tsserver%29). It provides the following features to your editor.

* Complete property names or custom-tags or attribute in Angular Components' template.
* Check semantic errors in components' template.

![screencast](screencast.gif)

## Install

**Your editor's TypeScript plugin should uses tsserver** because we need rewrite `tsserver.js` to integrate with the Angular's language service, please check out [TypeScript Editor Support](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

1. Change directory your project root.
1. Install requirements via `npm install typescript @angular/language-service reflect-metadata`.
1. 

## Uninstall

You can recover the original `tsserver.js` via:

1. `cd ${YOUR_PROJECT_ROOT}/node_modules/typescript/lib`
1. `cp tsserver.js.bk tsserver.js`

## License

MIT License

Copyright (c) 2016 Quramy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

