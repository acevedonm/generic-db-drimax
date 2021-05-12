import * as fs from 'fs';
import {parse} from 'dotenv';

export class ConfigService {
    private readonly envConfig: {[key: string] : string};

    constructor(){
        const isDevelopmentEnv = process.env.NODE_ENV !== "production"; //la variable de entorno NODE_ENV No esta declarada en el ambiente de desarrollo, solo se declara en produccion


        //si estamos en desarrollo
        if(isDevelopmentEnv){
            const envFilePath = __dirname + '/../../.env'; //si estamos en desarrollo debe existir .env
            const existsPath = fs.existsSync(envFilePath);

            if(!existsPath){
                console.log('.env file does not exist')
                process.exit(0) // cierra el proceso de nodejs
            }

            this.envConfig = parse(fs.readFileSync(envFilePath));
        }else{
            //estamos en produccion
            this.envConfig = {
                PORT: process.env.PORT
            }
        }
    }

    get(key:string):string{
        return this.envConfig[key];
    }
}