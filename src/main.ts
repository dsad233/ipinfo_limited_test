import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { limiter } from './middlewares/express-limited';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(limiter);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
