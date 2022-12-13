import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageController } from './controllers/package.controller';
import { ThemeController } from './controllers/theme.controller';
import { UpdateController } from './controllers/update.controller';
import { UserController } from './controllers/user.controller';
import { AuthGuard } from './shared/auth.guard';
import environment from './shared/environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASS'),
        database: config.get('DB_DB'),
        entities: []
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [
    UserController, 
    PackageController, 
    UpdateController, 
    ThemeController
  ],
  providers: [AuthGuard],
})
export class AppModule {


}
