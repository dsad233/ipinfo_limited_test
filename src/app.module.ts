import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IptestModule } from './iptest/iptest.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './configs/configuration';
import { ValidationSchema } from './configs/validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [configuration],
      validationSchema: ValidationSchema,
      validationOptions: {
        abortEarly: false,
      }
    })
    , IptestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
