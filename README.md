## ng-scroller
![Node.js CI](https://github.com/edisonaugusthy/ng-scrollbar/workflows/Node.js%20CI/badge.svg)

 A Custom scroll bar component in angular with customization options

 see [Stackblitz Demo](https://ng-scroller.stackblitz.io/) here
 Available in  [NPM](https://www.npmjs.com/package/ng-scroller)

Angular compatibility
| Angular Version        | package version |
| ---------------------- | :-------------: |
| angular 2.x.x - 11.x.x | 0.0.1 and above |
| angular 11.x.x - 17.x.x | 0.0.4 and above |

## Usage steps
 - Run `npm i ng-scroller --save` in command prompt from root of your project folder

 - Add to declarations array in app module

  ```ts
     declarations: [
      NgScrollbarComponent
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
