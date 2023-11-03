import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.service';
import { MessageRepository } from './messages.repository';

// Providers meaning things the can be used as dependency for other classes
@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessageRepository],
})
export class MessagesModule {}
