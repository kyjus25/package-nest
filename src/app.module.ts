import { Module } from '@nestjs/common';
import { PackageController } from './controllers/package.controller';
import { ThemeController } from './controllers/theme.controller';
import { UpdateController } from './controllers/update.controller';
import { UserController } from './controllers/user.controller';
import { AppService } from './shared/app.service';

@Module({
  imports: [],
  controllers: [
    UserController, 
    PackageController, 
    UpdateController, 
    ThemeController
  ],
  providers: [AppService],
})
export class AppModule {}
