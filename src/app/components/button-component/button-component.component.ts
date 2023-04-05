import { Component } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss'],
})
export class ButtonComponentComponent {
  label = 'Nova mensagem';
}
