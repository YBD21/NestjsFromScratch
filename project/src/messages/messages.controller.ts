import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessageService;

  constructor() {
    //USE DEPENDENCY INJECTION
    this.messagesService = new MessageService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    // console.log(body);
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    // console.log(id);
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found !');
    }

    return message;
  }
}
