import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { setting } from './../src/app.setting';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    setting(app);

    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('welcome to dongdong world');
  });

  describe('Movie', () => {
    it('Get', () => {
      return request(app.getHttpServer()).get('/movie').expect(200).expect([]);
    });

    it('POST', () => {
      return request(app.getHttpServer())
        .post('/movie')
        .send({
          title: 'TEST',
          year: 2020,
          gernes: ['test'],
        })
        .expect(201);
    });

    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/movie').expect(404);
    });

    it('Get/:id', () => {
      return request(app.getHttpServer()).get('/movie/1').expect(200);
    });

    it('Get/:id error', () => {
      return request(app.getHttpServer())
        .get('/movie/999')
        .expect(404)
    });
  });
});
