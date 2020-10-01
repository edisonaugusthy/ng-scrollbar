import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input, OnChanges, SimpleChange } from '@angular/core';
import { Options } from './options';

@Component({
  selector: 'ng-scrollbar',
  encapsulation: ViewEncapsulation.None,
  template: `
   <div id="progressBarContainer" class="{{this.options?.containerClass}}">
     <div id="progressBar"class="{{this.options?.progressBarClass}}"></div>
   </div>
  `,
  styles: [
    `
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
  #progressBarContainer {
   position: fixed;
   z-index: 10;
   background: rgba(255, 255, 255, 0.05);
}


#progressBar {
  position: absolute;
  will-change: transform, opacity;
  background: linear-gradient(to top, violet, red);
  transform-origin: top center;
  transform: scale(1, 0);
  opacity: 0;
}

#progressBarContainer,
#progressBar {
  top: 0;
  right: 0;
  bottom: 0;
  width: 10px;
}
`
  ]
})
export class NgScrollbarComponent implements OnChanges, AfterViewInit {
  @Input() options: Options;
  private progressBarContainer: any;
  private progressBar: any;
  private totalPageHeight: any;
  private debounceResize: any;
  constructor() { }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      const changedProp = changes[propName];
      if (changedProp.isFirstChange()) {

      } else {
        this.options = changedProp.currentValue;
      }
    }

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.progressBarContainer = document.querySelector("#progressBarContainer");
      this.progressBar = document.querySelector("#progressBar");
      this.totalPageHeight = document.body.scrollHeight - window.innerHeight;
      this.bindMethods()
    }, 100);

  }

  bindMethods() {
    window.addEventListener("scroll", () => {
      let newProgressHeight = window.pageYOffset / this.totalPageHeight;
      this.progressBar.style.transform = `scale(1,${newProgressHeight})`;
      this.progressBar.style.opacity = `${newProgressHeight}`;
    }, {
      capture: true,
      passive: true
    });

    window.addEventListener("resize", () => {
      clearTimeout(this.debounceResize);
      this.debounceResize = setTimeout(() => {
        this.totalPageHeight = document.body.scrollHeight - window.innerHeight;
      }, 250);
    });

    this.progressBarContainer.addEventListener("click", (e: any) => {
      let newPageScroll = e.clientY / this.progressBarContainer.offsetHeight * this.totalPageHeight;
      window.scrollTo({
        top: newPageScroll,
        behavior: 'smooth'
      });
    });
  }

}
