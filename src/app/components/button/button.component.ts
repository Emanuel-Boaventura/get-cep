import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() href?: string | any[];
  @Input() target?: '_blank' | '_self' | '_parent' | '_top' = '_self';
  @Input() buttonClass?: string = '';
  @Input() type?: 'text' | 'submit' = 'text';
  @Input() text?: string = '';
  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event) {
    this.buttonClick.emit(event);
  }
}
