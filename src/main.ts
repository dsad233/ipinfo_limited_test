import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { limiter } from './middlewares/express-limited';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  app.use(limiter);
}
bootstrap();
