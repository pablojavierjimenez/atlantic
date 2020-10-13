import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent implements OnInit {

  /**
   * this is the posible state
   */
  public isOn: boolean;
  @Input() buttonText: string;

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Shwitch the isOn variable state.
   * @method
   * @returns boolean
   */
  clicked(): boolean {
    return this.isOn = !this.isOn;
  }

  get message(): string {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

}
