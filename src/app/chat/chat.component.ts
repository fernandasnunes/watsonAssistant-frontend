import { Component, OnInit } from '@angular/core';
import { WatsonAssistantService } from '../watson-assistant.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private watsonAssistantService: WatsonAssistantService) {

  }

  userInput: string;
  array = []
  context = {};

  // pegar o valor que esta no input
  // enviar o valor do input para o serviço do watson
  // importar o método do watson
  // tratar a resposts e colocar ela no html
  // zerar meu input
  // fazer com que o scroll da página se atualize

  ngOnInit() {
 this.ConversationFormat('');

  }




  //pega o envio do usuário
  onSubmit() {
    console.log("-----on submit -----")
    console.log(this.userInput)
    console.log(this.context)
    if (this.userInput) {
      this.array.push({
        sentBy: 'user',
        text: this.userInput

      })

      this.ConversationFormat(this.userInput)
       this.userInput = null

    }
  }
  //pega o output do bot
  responseAssistant(text) {

    this.array.push({
      sentBy: 'bot',
      text: text

    })
  }
  //monta o input do usuário e o output do bot para o envio, adicionando o context :) 
  ConversationFormat(text) {
    const messageWatson = {
      //se estou recebendo messege no backend, devo colocar message
      message: text,
      context: this.context
    }
    console.log("----- conversation format -----")
    console.log(messageWatson)
    this.returnAssistant(messageWatson)
  }

  returnAssistant(objConversation) {
    this.watsonAssistantService.postConversation(objConversation).subscribe(response => {
      console.log("----- response -----")
      console.log(response)
      this.context = response.context;
      response.output.text.map((content) => {
        //atruibuição de valor no response
        if (content) {
          this.responseAssistant(content)

        }
        else {
          content = null

        }

      });

    })

  }




}
