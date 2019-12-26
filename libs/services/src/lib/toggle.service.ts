import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private toggleButtonOnOff = new EventEmitter();
  constructor() { }

  toggleOnOffClick() {
    this.toggleButtonOnOff.emit();
  }

  toggleOnOffEvent() {
    return this.toggleButtonOnOff;
  }
}
