import { Component } from '@angular/core';
import { MessageService, MessageType } from 'src/app/services/message.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {
  message = 'Clique no botão abaixo para procurar uma nova mensagem';

  constructor(private messageService: MessageService) {}

  onNewMessage() {
    this.message = 'buscando...'
    this.messageService.getMessage().subscribe({
      next: (data: MessageType) => (this.message = data.slip.advice),
      error: (error) => (this.message = error),
    });
  }
}
