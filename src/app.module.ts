import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ExampleModule } from './modules/example/example.module';
import { TypeOrmModule } from '@nestjs/typeorm';
require('dotenv').config();

const { USER_NAME, PASSWORD, DB_NAME } = process.env;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: USER_NAME,
      password: PASSWORD,
      database: DB_NAME,
      entities: [__dirname + './**/**/*entity[.ts,.js'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule,
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string; //esta variable es estatica, significa que no tenes que instanciar AppModule para acceder a ella
  constructor(private readonly _configService: ConfigService) {
    //cuando instanciamos APPModule nest le inyecta un objeto de tipo ConfigService

    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
