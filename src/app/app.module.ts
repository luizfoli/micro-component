
import { NgModule, Injector} from '@angular/core';

import { LikableCommentComponent } from './shared/likable-comment/likable-comment.component';

@NgModule({
  entryComponents: [LikableCommentComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {
    const el = LikableCommentComponent;
    customElements.define('likable-comment', el);
  }

  ngDoBootstrap() {

  }
}
