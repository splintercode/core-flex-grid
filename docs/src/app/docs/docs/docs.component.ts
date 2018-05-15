import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

// import { fadeAnimation } from '../../common/shared/animations';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // animations: [fadeAnimation]
})
export class DocsComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;
  showMenu = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (isPlatformBrowser) {
      this.routerSubscription = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(event => {
        window.scrollTo(0, 0);
      });
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
