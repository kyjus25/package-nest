import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './shared/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
