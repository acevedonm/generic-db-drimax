import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number| string; //esta variable es estatica, significa que no tenes que instanciar AppModule para acceder a ella

  constructor(private readonly _configService: ConfigService){ //cuando instanciamos APPModule nest le inyecta un objeto de tipo ConfigService
    AppModule.port= this._configService.get(Configuration.PORT);    
  }


}



