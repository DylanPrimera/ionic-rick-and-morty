import { Directive } from '@angular/core';

@Directive({
  selector: '[appIsRouterActive]',
  standalone: true
})
export class IsRouterActiveDirective {

  constructor() { }

}
