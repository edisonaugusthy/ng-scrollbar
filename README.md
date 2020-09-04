# ng-scroller
![NPM Publish](https://github.com/edisonaugusthy/ng-scrollbar/workflows/NPM%20Publish/badge.svg)
![Node.js CI](https://github.com/edisonaugusthy/ng-scrollbar/workflows/Node.js%20CI/badge.svg)

 A Custom scroll bar component in angular with customization options

 see [Stackblitz Demo](https://ng-scroller.stackblitz.io/) here
 Available in  [NPM](https://www.npmjs.com/package/ng-scroller)

Angular compatibility
| Angular Version        | package version |
| ---------------------- | :-------------: |
| angular 2.x.x - 11.x.x | 0.0.1 and above |

## Usage steps
 - Run `npm i ng-scroller --save` in command prompt from root of your project folder
 - Add import to App Module like this `import { NgScrollbarModule } from 'ng-scroller';`
 - Add to imports array in app module

  ```ts
     imports: [
      BrowserModule,
      NgScrollbarModule
     ],
 ```

- Then add `<ng-scrollbar>` component to where you want to add scroll
    ```html
     <ng-scrollbar [options]="options"></ng-scrollbar>
   ```

> `options` is optional

##### Customization

 `Options` can accept multiple classes that will be added to parent containers. so pass appropriate classes
```ts
   interface Options {
    containerClass?: string;
    progressBarClass?: string;
}
  ```

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Vivaldi |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 8 versions                                                                                                                                                                                                   | last 8 versions                                                                                                                                                                                               | last 5 versions                                                                                                                                                                                                   |


## Built with 🔧

* Angular

## Developing 👷

1. [Clone this repo](https://github.com/edisonaugusthy/ng-scrollbar.git) with git.
1. Install dependencies by running `npm install` within the directory that you cloned (probably `ng-scrollbar`).
1. Start the development server with `ng serve --o`.
1. Open development site by going to [http://localhost:4200](http://localhost:4200) in your browser.

## Author 🔮

<table>
  <tr>
    <td align="center"><a href="https://github.com/edisonaugusthy"><img src="https://github.com/edisonaugusthy.png?size=100" width="100px;" alt="Edison"/><br /><sub><b>Edison Augusthy</b></sub></a><br /><a href="https://github.com/edisonaugusthy/ng-scrollbar/commits?author=edisonaugusthy" title="Edison">💻</a></td>

  </tr>

</table>
