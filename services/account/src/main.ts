import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import admin, { ServiceAccount } from 'firebase-admin';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, 
    { 
      transport: Transport.TCP,
      options: {
        port: 3001
      }
    }
  );

  const config: ConfigService = app.get(ConfigService);

  const serverPort: string = config.get<string>('SERVER_PORT');

  const firebaseServiceAccount: ServiceAccount = {
    "projectId": config.get<string>('FIREBASE_PROJECT_ID'),
    "privateKey": config.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
    "clientEmail": config.get<string>('FIREBASE_CLIENT_EMAIL'),
  };

  admin.initializeApp({ credential: admin.credential.cert(firebaseServiceAccount) });
  await app.listen();
}

bootstrap();
