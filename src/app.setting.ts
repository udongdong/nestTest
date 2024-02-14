import { INestApplication, ValidationPipe } from '@nestjs/common';

export const setting = (app: INestApplication<any>) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
};
