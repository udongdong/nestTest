import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setting } from './app.setting';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setting(app);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transform: true,
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
