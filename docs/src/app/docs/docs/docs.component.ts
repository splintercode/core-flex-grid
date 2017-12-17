import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;

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
