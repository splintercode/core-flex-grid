import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../common/shared/shared.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs/docs.component';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsGridComponent } from './docs-grid/docs-grid.component';
import { DocsColumnAlignmentComponent } from './docs-column-alignment/docs-column-alignment.component';
import { DocsColumnCenteringComponent } from './docs-column-centering/docs-column-centering.component';
import { DocsColumnOrderingComponent } from './docs-column-ordering/docs-column-ordering.component';
import { DocsColumnSpacingComponent } from './docs-column-spacing/docs-column-spacing.component';
import { DocsColumnOffsetComponent } from './docs-column-offset/docs-column-offset.component';
import { DocsColumnNestingComponent } from './docs-column-nesting/docs-column-nesting.component';
import { DocsUtilMaxWidthComponent } from './docs-util-max-width/docs-util-max-width.component';
import { DocsUtilFullWidthComponent } from './docs-util-full-width/docs-util-full-width.component';
import { DocsUtilFitFillComponent } from './docs-util-fit-fill/docs-util-fit-fill.component';
import { DocsUtilVisibilityComponent } from './docs-util-visibility/docs-util-visibility.component';
import { DocsUtilSpacingComponent } from './docs-util-spacing/docs-util-spacing.component';
import { DocsUtilTextAlignmentComponent } from './docs-util-text-alignment/docs-util-text-alignment.component';
import { DocsUtilFloatsComponent } from './docs-util-floats/docs-util-floats.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DocsRoutingModule
  ],
  declarations: [
    DocsComponent,
    DocsHomeComponent,
    DocsGridComponent,
    DocsColumnAlignmentComponent,
    DocsColumnCenteringComponent,
    DocsColumnOrderingComponent,
    DocsColumnSpacingComponent,
    DocsColumnOffsetComponent,
    DocsColumnNestingComponent,
    DocsUtilMaxWidthComponent,
    DocsUtilFullWidthComponent,
    DocsUtilFitFillComponent,
    DocsUtilVisibilityComponent,
    DocsUtilSpacingComponent,
    DocsUtilTextAlignmentComponent,
    DocsUtilFloatsComponent
  ]
})
export class DocsModule { }
